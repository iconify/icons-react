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
		"content": `<style>.f6cvp9qkf {
  d: path("M8 2.5h8V5c0 1.5 2.5 2 3.5 3L19 21.5H5L4.5 8C5.5 7 8 6.5 8 5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v5l1srbwi {
  fill: currentColor;
  d: path("m13 12l1.25-2.5a4.5 4.5 0 0 1 2.25 4h-2.75A1.75 1.75 0 0 0 13 12m0 3l1.25 2.5a4.5 4.5 0 0 1-4.5 0l1.5-2.5A1.75 1.75 0 0 0 13 15m-2.75-1.5H7.5a4.5 4.5 0 0 1 2.25-4l1.5 2.5a1.75 1.75 0 0 0-1 1.5");
}
</style><g class="hntgybcog"><path class="f6cvp9qkf"/><path class="v5l1srbwi"/></g>`,
		"fallback": "uix:lead-apron",
	});
}

export default Component;
