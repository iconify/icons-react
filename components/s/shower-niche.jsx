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
		"content": `<style>.j9dh20bhx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.5 2.25h11q1.76 0 3.005 1.245T21.75 6.5v11q0 1.76-1.245 3.005T17.5 21.75h-11q-1.76 0-3.005-1.245T2.25 17.5v-11q0-1.76 1.245-3.005T6.5 2.25m.75 13H6q-.074 0-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141T5.25 16t.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h12q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T18 15.25h-1.25V8.5q0-2.25-2.25-2.25h-5q-2.25 0-2.25 2.25zm1.5 0h6.5V8.5q0-.75-.75-.75h-5q-.75 0-.75.75z");
}
</style><path class="j9dh20bhx"/>`,
		"fallback": "uix-solid:shower-niche",
	});
}

export default Component;
