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

.w_5zfl6am {
  d: path("M8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0M4 21c0-4 3.5-6.5 8-6.5q.179 0 .356.005M14.25 16.5H16l.75-1.5h2.5l.75 1.5h1.75v5.25h-7.5Z");
}

.x404bxb1x {
  d: path("M16.75 19a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><g class="hntgybcog"><path class="w_5zfl6am"/><path class="x404bxb1x"/></g>`,
		"fallback": "uix:property-photographer",
	});
}

export default Component;
