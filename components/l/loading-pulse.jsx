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

.llv4qgaxq {
  d: path("M14.907 4.013a8.5 8.5 0 0 1 0 15.974m-5.814 0a8.5 8.5 0 0 1 0-15.974");
}

.xo24oudce {
  fill: currentColor;
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="xo24oudce"/><path class="llv4qgaxq"/></g>`,
		"fallback": "uix:loading-pulse",
	});
}

export default Component;
