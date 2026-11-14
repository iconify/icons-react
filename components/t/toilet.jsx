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
		"content": `<style>.kp94o6gjr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.25 2.75h-1q-2.5 0-2.5 2.5v5q0 .641.28 1.165q-.065.053-.118.119t-.088.142q-.037.076-.055.158T5.75 12q0 3.978 3 5.921V20.5q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014H14q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146v-2.172q4-1.227 4-6.328q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T18 11.25h-6.45q.2-.459.2-1v-5q0-1.036-.732-1.768T9.25 2.75");
}
</style><path class="kp94o6gjr"/>`,
		"fallback": "uix-solid:toilet",
	});
}

export default Component;
