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
		"content": `<style>.dwa-zub6y {
  d: path("M5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M8.5 3.5h7A1.5 1.5 0 0 1 17 5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 5a1.5 1.5 0 0 1 1.5-1.5m3.5 3v3");
}

.f8w58tb4x {
  d: path("M5 18H2.5v-3.5A1.5 1.5 0 0 1 4 13h2.5L9 9.5h6l2.5 3.5H20a1.5 1.5 0 0 1 1.5 1.5V18H19M9 18h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="f8w58tb4x"/><path class="dwa-zub6y"/></g>`,
		"fallback": "uix:solar-car",
	});
}

export default Component;
