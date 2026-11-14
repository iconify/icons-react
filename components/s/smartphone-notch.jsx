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

.l-ggnpg7i {
  d: path("M9 2.5v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2");
}

.n-2uxvvgk {
  d: path("M10.375 2.5h3.25A4.375 4.375 0 0 1 18 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-3.25A4.375 4.375 0 0 1 6 17.125V6.875A4.375 4.375 0 0 1 10.375 2.5M10.5 18h3");
}
</style><g class="hntgybcog"><path class="n-2uxvvgk"/><path class="l-ggnpg7i"/></g>`,
		"fallback": "uix:smartphone-notch",
	});
}

export default Component;
