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

.o-4bk_b4n {
  d: path("M7 8a5 5 0 1 0 10 0A5 5 0 1 0 7 8");
}

.qpay6ac8u {
  d: path("M13.75 6.5c-.5-1-3.5-1-3.5.5c0 1.75 3.5.25 3.5 2c0 1.5-3 1.5-3.5.5m-7.75 9c3-3 6-3 9.5 0s6.5 3 9.5 0");
}
</style><g class="hntgybcog"><path class="o-4bk_b4n"/><path class="qpay6ac8u"/></g>`,
		"fallback": "uix:revenue-stream",
	});
}

export default Component;
