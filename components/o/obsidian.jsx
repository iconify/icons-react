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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l2ceo8b6x {
  d: path("M13 2.5L11.5 12l5.5 9");
}

.w93zogbgd {
  d: path("M3.964 15.542L6.825 6.55a1.5 1.5 0 0 1 .674-.841l4.612-2.69a1.5 1.5 0 0 1 1.693.124l5.921 4.737a1.5 1.5 0 0 1 .507 1.576l-2.821 10.078a1.5 1.5 0 0 1-1.871 1.033L4.967 17.435a1.5 1.5 0 0 1-1.003-1.893");
}
</style><g class="hntgybcog"><path class="w93zogbgd"/><path class="l2ceo8b6x"/></g>`,
		"fallback": "uix:obsidian",
	});
}

export default Component;
