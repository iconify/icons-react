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
		"content": `<style>.ais2kobvo {
  d: path("M9.698 16.803L5.632 9.387A2.625 2.625 0 0 1 7.933 5.5h8.134a2.625 2.625 0 0 1 2.301 3.887l-4.066 7.416a2.625 2.625 0 0 1-4.604 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ocfrf5bnq {
  d: path("M8.5 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m4 2.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="ais2kobvo"/><path class="ocfrf5bnq"/></g>`,
		"fallback": "uix:pizza-slice",
	});
}

export default Component;
