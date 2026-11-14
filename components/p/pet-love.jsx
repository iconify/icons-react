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

.mxubyx8vs {
  d: path("m12 21l-8-8c-2.5-2.5-2-8.25 3-8.75c2.25-.25 4 1 5 2.75c1-1.75 2.75-3 5-2.75c5 .5 5.5 6.25 3 8.75Z");
}

.tj1gbk8dt {
  d: path("M8.5 13V9.75l2 1.25h3l2-1.25V13c0 1.75-1.5 3-3.5 3s-3.5-1.25-3.5-3");
}
</style><g class="hntgybcog"><path class="mxubyx8vs"/><path class="tj1gbk8dt"/></g>`,
		"fallback": "uix:pet-love",
	});
}

export default Component;
