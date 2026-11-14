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
		"content": `<style>.gx9_jwqdm {
  d: path("M3.5 12c2-2.75 5-4 8.5-4s6.5 1.25 8.5 4c-2 2.75-5 4-8.5 4s-6.5-1.25-8.5-4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rl5-oib5i {
  d: path("M10.75 12a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M9 5l3-2.5L15 5M9 19l3 2.5l3-2.5");
}
</style><g class="hntgybcog"><path class="gx9_jwqdm"/><path class="rl5-oib5i"/></g>`,
		"fallback": "uix:look-to-scroll",
	});
}

export default Component;
