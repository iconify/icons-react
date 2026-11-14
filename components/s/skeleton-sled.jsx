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
		"content": `<style>.j_e208b-b {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13 7.25H5q-2.75 0-2.75 2.75T5 12.75h.25v2.5H2.5q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141q-.014.072-.014.146t.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h15.75Q22 16.75 22 13t-3.75-3.75q-.074 0-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141T17.5 10t.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014q2.25 0 2.25 2.25t-2.25 2.25h-5.5v-2.5H13q2.75 0 2.75-2.75T13 7.25m-1.75 5.5h-4.5v2.5h4.5z");
}
</style><path class="j_e208b-b"/>`,
		"fallback": "uix-solid:skeleton-sled",
	});
}

export default Component;
