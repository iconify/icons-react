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

.mkksvcbdq {
  cx: 7px;
  cy: 7.5px;
  r: 2.75px;
}

.uyiddkvas {
  d: path("M2.75 15.25h12l3.75-5.5m-13.25 5.5v4.5m9.5-4.5v4.5");
}
</style><g class="hntgybcog"><circle class="mkksvcbdq"/><path class="uyiddkvas"/></g>`,
		"fallback": "iconoven:sun-lounger",
	});
}

export default Component;
