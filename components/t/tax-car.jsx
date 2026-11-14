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

.qmeiyr_ni {
  d: path("M2.5 10V7.5l2.5-1L7.5 3H13l2.5 3.5l3 1V10Z");
}

.yfwi44_6l {
  d: path("M4.5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m8 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m3 9.5l6-6m-5 1h.01m3.99 4h.01");
}
</style><g class="hntgybcog"><path class="qmeiyr_ni"/><path class="yfwi44_6l"/></g>`,
		"fallback": "uix:tax-car",
	});
}

export default Component;
