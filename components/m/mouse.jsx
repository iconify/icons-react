import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x-w99obbh {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.419 4.081Q14.589 2.25 12 2.25T7.581 4.081Q5.75 5.911 5.75 8.5v7q0 2.589 1.831 4.419Q9.411 21.75 12 21.75t4.419-1.831T18.25 15.5v-7q0-2.589-1.831-4.419M12.75 9.5q0 .074-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146v-3q0-.074.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.052-.053.113-.094t.13-.069t.141-.043T12 5.75t.146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146z");
}
</style><path class="x-w99obbh"/>`,
		"fallback": "uix-solid:mouse",
	});
}

export default Component;
