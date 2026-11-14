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
		"content": `<style>.b7v_apg2y {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.549 5.75H9.451q-1.116 0-1.861.83q-.745.831-.625 1.94l.869 8q.243 2.23 2.486 2.23h3.36q2.243 0 2.486-2.23l.869-8q.12-1.109-.625-1.94q-.745-.83-1.861-.83m.951 8.5q.074 0 .146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-7q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T7.75 15t.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014z");
}
</style><path class="b7v_apg2y"/>`,
		"fallback": "uix-solid:shot-glass",
	});
}

export default Component;
