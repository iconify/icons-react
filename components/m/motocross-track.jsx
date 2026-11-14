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

.t9ebktq4f {
  d: path("M4 10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m11-3a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.tem2whp1d {
  d: path("m6.5 10l4-4h3M13 2.5h2L17.5 7M7.738 17.679l6.318-3.402a1.5 1.5 0 0 1 2.09.73l1.458 3.402a1.5 1.5 0 0 1-1.379 2.091H8.45a1.5 1.5 0 0 1-.712-2.821");
}
</style><g class="hntgybcog"><path class="t9ebktq4f"/><path class="tem2whp1d"/></g>`,
		"fallback": "uix:motocross-track",
	});
}

export default Component;
