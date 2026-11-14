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

.sm3uksbzq {
  d: path("M4.5 8c4.5 3 10.5 3 15 0M7 21.5h10");
}

.u_5hniubt {
  d: path("M3.5 11.5a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0");
}
</style><g class="hntgybcog"><path class="u_5hniubt"/><path class="sm3uksbzq"/></g>`,
		"fallback": "uix:stability-ball",
	});
}

export default Component;
