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
		"content": `<style>.g7fykeuht {
  d: path("M16.75 7.25a3 3 0 1 1-2-2.25m-3 5.25L3.5 18.5m17-6.75a7.5 7.5 0 0 1-7.75 3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qkcf50atv {
  d: path("m14.5 13.75l-1.75 1.75l2 1.75");
}
</style><g class="hntgybcog"><path class="g7fykeuht"/><path class="qkcf50atv"/></g>`,
		"fallback": "uix:torque",
	});
}

export default Component;
