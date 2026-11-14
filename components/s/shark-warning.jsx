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
		"content": `<style>.b197bdc5d {
  d: path("m14.291 7.101l5.026 8.993A2.625 2.625 0 0 1 17.026 20H6.974a2.625 2.625 0 0 1-2.291-3.906l5.026-8.993a2.625 2.625 0 0 1 4.582 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uq89zgw5n {
  d: path("M8 16.5c1.5-2 3-5.5 6.5-7v7Z");
}
</style><g class="hntgybcog"><path class="b197bdc5d"/><path class="uq89zgw5n"/></g>`,
		"fallback": "uix:shark-warning",
	});
}

export default Component;
