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

.nnun-v5ij {
  fill: currentColor;
  d: path("M10 10V4.75A7.5 7.5 0 0 0 4.75 10Z");
}

.regd_xbnf {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M12 2.5v19M2.5 12h19");
}
</style><g class="hntgybcog"><path class="regd_xbnf"/><path class="nnun-v5ij"/></g>`,
		"fallback": "uix:quadrant-upper-left",
	});
}

export default Component;
