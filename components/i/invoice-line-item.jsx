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
		"content": `<style>.ajuhwd_4t {
  d: path("M5 2.5h14V21l-2.25-1.5L14.5 21L12 19.5L9.5 21l-2.25-1.5L5 21Zm3.5 4h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j4s573veb {
  d: path("M9.25 9.75h5.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75h-5.5A1.75 1.75 0 0 1 7.5 11.5a1.75 1.75 0 0 1 1.75-1.75M8.5 16.5h5");
}
</style><g class="hntgybcog"><path class="ajuhwd_4t"/><path class="j4s573veb"/></g>`,
		"fallback": "uix:invoice-line-item",
	});
}

export default Component;
