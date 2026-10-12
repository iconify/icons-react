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

.hx9y0czch {
  d: path("M5.75 8.5a6.25 2.5 0 0 0 12.5 0M9.5 14v4.5m8.75-5q2.25-.375 3-2.25");
}

.t2hbpobes {
  d: path("M5.75 8.5a6.25 2.5 0 0 1 12.5 0v9.25c0 1.25.75 2.5 2.5 3.5H3.25c1.75-1 2.5-2.25 2.5-3.5Z");
}
</style><g class="hntgybcog"><path class="t2hbpobes"/><path class="hx9y0czch"/></g>`,
		"fallback": "iconoven:tree-stump",
	});
}

export default Component;
