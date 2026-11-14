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

.rbzejlwqs {
  d: path("M9.625 3.5h4.75A6.125 6.125 0 0 1 20.5 9.625v4.75a6.125 6.125 0 0 1-6.125 6.125h-4.75A6.125 6.125 0 0 1 3.5 14.375v-4.75A6.125 6.125 0 0 1 9.625 3.5M7 9.5h10");
}

.rhg2tshdt {
  d: path("M14.5 7L17 9.5L14.5 12m2.5 2.5H7M9.5 12L7 14.5L9.5 17");
}
</style><g class="hntgybcog"><path class="rbzejlwqs"/><path class="rhg2tshdt"/></g>`,
		"fallback": "uix:swap-square",
	});
}

export default Component;
