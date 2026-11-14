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
		"content": `<style>.dpme1sb0v {
  d: path("M7.5 9h9a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 18v-5.5A3.5 3.5 0 0 1 7.5 9M9 3v6m6-6v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yfewu9b_t {
  d: path("M9 15.25a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="dpme1sb0v"/><path class="yfewu9b_t"/></g>`,
		"fallback": "uix:travel-adapter-plug",
	});
}

export default Component;
