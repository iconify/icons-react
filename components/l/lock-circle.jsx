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

.mp49m9b0e {
  d: path("M10.625 11h2.75A2.625 2.625 0 0 1 16 13.625v1.25a2.625 2.625 0 0 1-2.625 2.625h-2.75A2.625 2.625 0 0 1 8 14.875v-1.25A2.625 2.625 0 0 1 10.625 11m-.875 0V9.5a2.25 2.25 0 0 1 4.5 0V11");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="mp49m9b0e"/></g>`,
		"fallback": "uix:lock-circle",
	});
}

export default Component;
