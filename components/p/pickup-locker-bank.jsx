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
		"content": `<style>.g5tdhvbrh {
  d: path("M11.75 5h.5a1.5 1.5 0 0 1 1.5 1.5V8a1.5 1.5 0 0 1-1.5 1.5h-.5a1.5 1.5 0 0 1-1.5-1.5V6.5a1.5 1.5 0 0 1 1.5-1.5M2.5 9h6m-6 6.25h6m7-6.25h6m-6 6.25h6M10.25 14h3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sawrzbcfr {
  d: path("M5.125 2.5h13.75A2.625 2.625 0 0 1 21.5 5.125v13.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 18.875V5.125A2.625 2.625 0 0 1 5.125 2.5m3.375 0v19m7-19v19");
}
</style><g class="hntgybcog"><path class="sawrzbcfr"/><path class="g5tdhvbrh"/></g>`,
		"fallback": "uix:pickup-locker-bank",
	});
}

export default Component;
