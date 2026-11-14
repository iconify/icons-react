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

.km0e41b9z {
  d: path("M9 16.5q3 2.5 6 0");
}

.tuaekkwgb {
  d: path("M7.375 4.5h9.25A4.375 4.375 0 0 1 21 8.875v8.25a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 17.125v-8.25A4.375 4.375 0 0 1 7.375 4.5M8 2.5V6m8-3.5V6M3 9h18M9.5 13h.01m4.99 0h.01");
}
</style><g class="hntgybcog"><path class="tuaekkwgb"/><path class="km0e41b9z"/></g>`,
		"fallback": "uix:mood-calendar",
	});
}

export default Component;
