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

.qq1sl8bzq {
  d: path("M9.5 2.5za3 3 0 0 1 3 3V10a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5.5a3 3 0 0 1 3-3");
}

.xq-eamc5b {
  d: path("M3.75 10a5.75 5.75 0 0 0 11.5 0M9.5 15.75v5.75m-3.5 0h7m1.75-3.5l2 2L21 15.75");
}
</style><g class="hntgybcog"><path class="qq1sl8bzq"/><path class="xq-eamc5b"/></g>`,
		"fallback": "uix:podcast-mic-check",
	});
}

export default Component;
