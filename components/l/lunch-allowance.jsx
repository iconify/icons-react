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
		"content": `<style>.aq3-wfpzh {
  d: path("M7.25 8.25v10.5L3.75 21M12 16.75a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j8c9j4bge {
  d: path("M10.908 21.5H3.5L5 5.5l1.25-2l1.25 2l1.25-2l1.25 2l1.25-2l1.25 2l1.25-2l1.25 2l.36 3.845M4.75 8.25h10.5");
}

.lggw-7dmn {
  d: path("M18 15.5c-.25-.5-.75-.75-1.25-.75c-.75 0-1.25.5-1.25 1c0 1.25 2.5.75 2.5 2c0 .5-.5 1-1.25 1s-1-.25-1.25-.75");
}
</style><g class="hntgybcog"><path class="j8c9j4bge"/><path class="aq3-wfpzh"/><path class="lggw-7dmn"/></g>`,
		"fallback": "uix:lunch-allowance",
	});
}

export default Component;
