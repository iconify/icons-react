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
		"content": `<style>.c87kbw-qo {
  d: path("m12.75 9.75l-2.75 4h4l-2.75 3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ssm8vq6xr {
  d: path("m14.299 7.175l5.058 9.184a2.625 2.625 0 0 1-2.299 3.891H6.942a2.625 2.625 0 0 1-2.299-3.891l5.058-9.184a2.625 2.625 0 0 1 4.598 0");
}
</style><g class="hntgybcog"><path class="ssm8vq6xr"/><path class="c87kbw-qo"/></g>`,
		"fallback": "uix:warning-electric-shock",
	});
}

export default Component;
