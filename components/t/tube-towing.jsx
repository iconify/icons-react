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

.sps7n8xqc {
  d: path("M5 16.5a7.5 7.5 0 1 1 12 0");
}

.vrb0_cc4g {
  d: path("M8.5 11.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-6 5h19M6 20h10m.25-13.25L21.5 2.5");
}
</style><g class="hntgybcog"><path class="sps7n8xqc"/><path class="vrb0_cc4g"/></g>`,
		"fallback": "uix:tube-towing",
	});
}

export default Component;
