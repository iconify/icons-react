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

.nblxdq35c {
  d: path("M8 10.5h8a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 12A1.5 1.5 0 0 1 8 10.5");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="nblxdq35c"/></g>`,
		"fallback": "uix:no-entry",
	});
}

export default Component;
