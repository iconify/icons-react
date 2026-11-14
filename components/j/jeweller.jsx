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

.o026rmb1b {
  d: path("m8.5 5.5l1.75-2.75h3.5L15.5 5.5L12 9.25Zm0 0h7");
}

.xgt97b4ir {
  d: path("M5.75 15a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 1 0-12.5 0");
}
</style><g class="hntgybcog"><path class="xgt97b4ir"/><path class="o026rmb1b"/></g>`,
		"fallback": "uix:jeweller",
	});
}

export default Component;
