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
		"content": `<style>.fhjoyp32r {
  d: path("m14.5 10.5l1.25 1.25l2.75-3M6 9h4.5M6 12h4.5M6 15.5h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q0_gb6qzx {
  width: 18.5px;
  height: 13.5px;
  x: 2.75px;
  y: 5.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="q0_gb6qzx"/><path class="fhjoyp32r"/></g>`,
		"fallback": "iconoven:settlement-check",
	});
}

export default Component;
