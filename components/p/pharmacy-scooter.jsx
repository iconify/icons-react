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
		"content": `<style>.fbd6lqbrj {
  d: path("M5.25 9.5h4A1.75 1.75 0 0 1 11 11.25v4A1.75 1.75 0 0 1 9.25 17h-4a1.75 1.75 0 0 1-1.75-1.75v-4A1.75 1.75 0 0 1 5.25 9.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x4gvgmbml {
  d: path("M3.5 17h14.75m.25 2l-2-16m-2 0h4M4 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="x4gvgmbml"/><path class="fbd6lqbrj"/></g>`,
		"fallback": "uix:pharmacy-scooter",
	});
}

export default Component;
