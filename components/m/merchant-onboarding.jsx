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

.o9ysv4qxn {
  d: path("M8.5 20.5v-5h3.75v5M18 15v6m-3-3h6");
}

.r5yf8ccnq {
  d: path("M5.25 11.25v9.25h8.55m4.95-8.15v-1.1");
}

.sn667rnao {
  d: path("m3 9l1.5-5h15L21 9a2.25 2.25 0 0 1-4.5 0A2.25 2.25 0 0 1 12 9a2.25 2.25 0 0 1-4.5 0A2.25 2.25 0 0 1 3 9");
}
</style><g class="hntgybcog"><path class="sn667rnao"/><path class="r5yf8ccnq"/><path class="o9ysv4qxn"/></g>`,
		"fallback": "uix:merchant-onboarding",
	});
}

export default Component;
