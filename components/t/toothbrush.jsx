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
		"content": `<style>.fef-m1big {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 21l9.5-9.5m.75-.75l3.5-3.5a1.06 1.06 0 0 1 1.5 0a1.06 1.06 0 0 1 0 1.5l-3.5 3.5a1.06 1.06 0 0 1-1.5 0a1.06 1.06 0 0 1 0-1.5m.25-.25L12 9m3.5-.5L14 7m3.5-.5L16 5");
}
</style><path class="fef-m1big"/>`,
		"fallback": "uix:toothbrush",
	});
}

export default Component;
