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

.itbx7-iik {
  d: path("M7.375 4h9.25A4.375 4.375 0 0 1 21 8.375v8.25A4.375 4.375 0 0 1 16.625 21h-9.25A4.375 4.375 0 0 1 3 16.625v-8.25A4.375 4.375 0 0 1 7.375 4M8 2.5V6m8-3.5V6");
}

.wigll5fci {
  d: path("M14 7.75a2.75 2.75 0 1 0 0 4.5a2.25 2.25 0 0 1 0-4.5M8 16.5h.01m3.99 0h.01m3.99 0h.01");
}
</style><g class="hntgybcog"><path class="itbx7-iik"/><path class="wigll5fci"/></g>`,
		"fallback": "uix:lunar-calendar",
	});
}

export default Component;
