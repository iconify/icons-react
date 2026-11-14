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
		"content": `<style>.d2yy4tbgb {
  d: path("M4.5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0m11 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M5 8h9v2a1.5 1.5 0 0 1-3 0a1.5 1.5 0 0 1-3 0a1.5 1.5 0 0 1-3 0Z");
}

.e1lwb7bjy {
  d: path("M5.125 4.5h8.25A2.625 2.625 0 0 1 16 7.125v6.25A2.625 2.625 0 0 1 13.375 16h-8.25A2.625 2.625 0 0 1 2.5 13.375v-6.25A2.625 2.625 0 0 1 5.125 4.5M16 8h2.75l2.75 3.5V16H16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="e1lwb7bjy"/><path class="d2yy4tbgb"/></g>`,
		"fallback": "uix:pin-food-truck",
	});
}

export default Component;
