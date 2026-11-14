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

.r5dqflb7a {
  d: path("M9.75 9h4.5A1.75 1.75 0 0 1 16 10.75v3.5A1.75 1.75 0 0 1 14.25 16h-4.5A1.75 1.75 0 0 1 8 14.25v-3.5A1.75 1.75 0 0 1 9.75 9");
}

.rxq3dac8v {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0m3-6.5l13 13");
}
</style><g class="hntgybcog"><path class="rxq3dac8v"/><path class="r5dqflb7a"/></g>`,
		"fallback": "uix:prohibited-items",
	});
}

export default Component;
