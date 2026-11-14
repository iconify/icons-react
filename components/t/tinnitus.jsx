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

.xktyp7gai {
  d: path("M7.25 9c0-1.75 1.25-3 3-3S13 7.25 13 8.75S11.75 11 10.75 12M19 4.5l2.5 2l-2.75 2l2.75 2l-2.5 2");
}

.zhvd1bbvr {
  d: path("M4.25 9c0-3.5 2.5-6 6-6c3.25 0 5.5 2.5 5.5 5.75c0 2.75-1.5 4-2.75 5.25s-1.25 2.5-1.75 4.5c-.5 1.75-2 2.5-3.5 2.5c-2 0-3.5-1.5-3.5-3.5");
}
</style><g class="hntgybcog"><path class="zhvd1bbvr"/><path class="xktyp7gai"/></g>`,
		"fallback": "uix:tinnitus",
	});
}

export default Component;
