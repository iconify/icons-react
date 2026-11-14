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
		"content": `<style>.f0jjzdbzw {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.75 9.75h-5.749q.489 1.321-.532 2.341l-6.378 6.378q-1.02 1.021-2.341.532V21.5q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043T3 22.25t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146v-19q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043Q2.926 1.75 3 1.75t.146.014t.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141q.014.072.014.146v2.377q.436-.127 1-.127h14q2.5 0 2.5 2.5q0 1.036-.732 1.768t-1.768.732");
}
</style><path class="f0jjzdbzw"/>`,
		"fallback": "uix-solid:shelf-bracket",
	});
}

export default Component;
