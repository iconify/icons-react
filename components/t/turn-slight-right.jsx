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
		"content": `<style>.b7xitabad {
  d: path("M15.5 9.5V4H10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m0n9262pn {
  d: path("M8.5 20.5V11l7-7");
}
</style><g class="hntgybcog"><path class="m0n9262pn"/><path class="b7xitabad"/></g>`,
		"fallback": "uix:turn-slight-right",
	});
}

export default Component;
