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
		"content": `<style>.bjxeiwbbv {
  d: path("M5.75 15C9 15 12 17 14 19.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jpcmuhj8m {
  d: path("M4.5 6.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m9 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-11 15v-5c0-2.5 2-4.25 5-4.25h9c3 0 5 1.75 5 4.25v5");
}

.rtaomjblp {
  d: path("M18.25 15C15 15 12 17 10 19.5");
}
</style><g class="hntgybcog"><path class="jpcmuhj8m"/><path class="bjxeiwbbv"/><path class="rtaomjblp"/></g>`,
		"fallback": "uix:people-hugging",
	});
}

export default Component;
