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
		"content": `<style>.cucls0r5u {
  d: path("M3.5 20.5C8 12 12 8 20.5 3.5C16 12 12 16 3.5 20.5");
}

.ez8hziwwt {
  d: path("M10.25 12a1.75 3.25 0 1 0 3.5 0a1.75 3.25 0 1 0-3.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cucls0r5u"/><path class="ez8hziwwt"/></g>`,
		"fallback": "uix:kayak",
	});
}

export default Component;
