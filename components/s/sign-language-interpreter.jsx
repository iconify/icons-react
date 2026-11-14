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
		"content": `<style>.shs_r9bfp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-2.5 14c0-4 2.5-6.25 5.5-6.25s5.5 2.25 5.5 6.25m1.5-11V5m2.75 5.5v-7m2.75 7V5M15 10v3.5a2.75 2.75 0 0 0 5.5 0V10M15 14.5l-2-2");
}
</style><path class="shs_r9bfp"/>`,
		"fallback": "uix:sign-language-interpreter",
	});
}

export default Component;
