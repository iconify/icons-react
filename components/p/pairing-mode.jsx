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
		"content": `<style>.b_ulcfb9d {
  d: path("M9.5 17.5a5.5 5.5 0 1 1 4.25-3.5");
}

.h75x1qbrx {
  d: path("M14.5 6.5a5.5 5.5 0 1 1-4.25 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="b_ulcfb9d"/><path class="h75x1qbrx"/></g>`,
		"fallback": "uix:pairing-mode",
	});
}

export default Component;
