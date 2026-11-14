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

.kwxq9wbat {
  d: path("M6.5 15.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m4.25 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m4.25 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.vkzs_8ule {
  d: path("M7.5 11.5h9A3.5 3.5 0 0 1 20 15v1.5a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 16.5V15a3.5 3.5 0 0 1 3.5-3.5m.5 0v-4a4 4 0 0 1 8 0V9");
}
</style><g class="hntgybcog"><path class="vkzs_8ule"/><path class="kwxq9wbat"/></g>`,
		"fallback": "uix:lockout-hasp",
	});
}

export default Component;
