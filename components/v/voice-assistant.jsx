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
		"content": `<style>.bsl1mibyg {
  d: path("M7 7a5 2 0 1 0 10 0A5 2 0 1 0 7 7M4 9q-1.5 3.5 0 7m16-7q1.5 3.5 0 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lmm6i3bsq {
  d: path("M7 7v11.5a5 2 0 0 0 10 0V7");
}
</style><g class="hntgybcog"><path class="lmm6i3bsq"/><path class="bsl1mibyg"/></g>`,
		"fallback": "uix:voice-assistant",
	});
}

export default Component;
