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

.selk_oake {
  d: path("M6 6h12a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 18 18H6a3.5 3.5 0 0 1-3.5-3.5v-5A3.5 3.5 0 0 1 6 6");
}

.t-zqpebiz {
  d: path("M6 9h4v3H6v3h4m4-6h4v6h-4Z");
}
</style><g class="hntgybcog"><path class="selk_oake"/><path class="t-zqpebiz"/></g>`,
		"fallback": "uix:lcd-segment-display",
	});
}

export default Component;
