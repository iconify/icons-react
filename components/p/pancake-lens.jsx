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
		"content": `<style>.awi8x3k-y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11q9.5-6.5 19 0q-9.5 6.5-19 0M6 18h12M7.5 11h9");
}
</style><path class="awi8x3k-y"/>`,
		"fallback": "uix:pancake-lens",
	});
}

export default Component;
