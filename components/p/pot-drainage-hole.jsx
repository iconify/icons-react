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
		"content": `<style>.bma3l0b0s {
  d: path("M5.25 2.5h13.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 18.75 6H5.25A1.75 1.75 0 0 1 3.5 4.25A1.75 1.75 0 0 1 5.25 2.5M5.5 6l1.75 9.5h9.5L18.5 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.inimrkqig {
  d: path("M10.5 11.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m1.5 7l1 1a1.5 1.5 0 1 1-2 0Z");
}
</style><g class="hntgybcog"><path class="bma3l0b0s"/><path class="inimrkqig"/></g>`,
		"fallback": "uix:pot-drainage-hole",
	});
}

export default Component;
