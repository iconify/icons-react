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

.mk5xfob2d {
  d: path("M5 12a8 8 0 1 1 4 6.928");
}

.qweh_5b2u {
  d: path("m2 9l3 3l3-3m1 3a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0h3.75m-1 0v2");
}
</style><g class="hntgybcog"><path class="mk5xfob2d"/><path class="qweh_5b2u"/></g>`,
		"fallback": "uix:recovery-crypto",
	});
}

export default Component;
