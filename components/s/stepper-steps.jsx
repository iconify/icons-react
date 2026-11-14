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
		"content": `<style>.gn62e8b0i {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15.75 12q0-3.25 3.25-3.25T22.25 12T19 15.25T15.75 12m-13 0q0-2.25 2.25-2.25T7.25 12T5 14.25T2.75 12m11-.75h-4.5q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141T8.5 12t.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h4.5q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141T14.5 12t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014");
}
</style><path class="gn62e8b0i"/>`,
		"fallback": "uix-solid:stepper-steps",
	});
}

export default Component;
