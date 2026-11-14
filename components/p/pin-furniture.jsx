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
		"content": `<style>.nf1arwbac {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.75 7v3.31q-2 .345-2 2.69v5.5q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h1.75v1.25q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146v-1.25h12.5v1.25q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146v-1.25h1.75q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146V13q0-2.345-2-2.69V7q0-3.25-3.25-3.25H7q-1.346 0-2.298.952T3.75 7m15 0v3.31q-2 .345-2 2.69v1.25h-9.5V13q0-2.345-2-2.69V7q0-.725.513-1.237Q6.275 5.25 7 5.25h10q1.75 0 1.75 1.75");
}
</style><path class="nf1arwbac"/>`,
		"fallback": "uix-solid:pin-furniture",
	});
}

export default Component;
