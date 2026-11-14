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

.jw13ts_ek {
  d: path("M15.25 12.5c1.75-.5 3 1 2.25 2.75c-.5 1.5-2.25 2.5-3.75 1.75c-1.5-1-.5-4 1.5-4.5");
}

.zcy-wgb8y {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0m8.5-1L5.25 5.25");
}
</style><g class="hntgybcog"><path class="zcy-wgb8y"/><path class="jw13ts_ek"/></g>`,
		"fallback": "uix:radar-rain",
	});
}

export default Component;
