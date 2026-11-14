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

.hv8kjbb6m {
  d: path("M4.5 3.5h5q3.5 0 3.5 3V7");
}

.s0ay1nodf {
  d: path("M7.5 11.5a5.5 4.5 0 0 1 11 0Zm2 3l-1 4m4.5-4v5m3.5-5l1 4");
}
</style><g class="hntgybcog"><path class="hv8kjbb6m"/><path class="s0ay1nodf"/></g>`,
		"fallback": "uix:low-flow-showerhead",
	});
}

export default Component;
