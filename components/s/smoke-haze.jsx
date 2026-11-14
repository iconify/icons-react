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
		"content": `<style>.ew23r_b_t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6C4 4 5 4 6.5 6s2.5 2 4 0s2.5-2 4 0s2.5 2 4 0m-11 6c1.5-2 2.5-2 4 0s2.5 2 4 0s2.5-2 4 0m-14 6c1.5-2 2.5-2 4 0s2.5 2 4 0s2.5-2 4 0s2.5 2 4 0");
}
</style><path class="ew23r_b_t"/>`,
		"fallback": "uix:smoke-haze",
	});
}

export default Component;
