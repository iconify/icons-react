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
		"content": `<style>.dg7sf9m6z {
  d: path("M9 5.5h6A3.5 3.5 0 0 1 18.5 9v9a3.5 3.5 0 0 1-3.5 3.5H9A3.5 3.5 0 0 1 5.5 18V9A3.5 3.5 0 0 1 9 5.5m1 0v-3h4v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rjavwcc8v {
  d: path("M9.5 11.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M9 17h6");
}
</style><g class="hntgybcog"><path class="dg7sf9m6z"/><path class="rjavwcc8v"/></g>`,
		"fallback": "uix:press-badge",
	});
}

export default Component;
