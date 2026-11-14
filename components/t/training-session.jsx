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

.n3rzbxb7m {
  d: path("M14 6H4a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1h3.75m4 2a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.ty7aen22l {
  d: path("M7.5 12.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}
</style><g class="hntgybcog"><path class="ty7aen22l"/><path class="n3rzbxb7m"/></g>`,
		"fallback": "uix:training-session",
	});
}

export default Component;
