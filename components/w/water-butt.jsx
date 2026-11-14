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

.xfrlrrb_j {
  d: path("M5 3h10c1.5 5 1.5 13 0 18H5C3.5 16 3.5 8 5 3M4 8.25h12");
}

.znwst_b2t {
  d: path("M16 15.5h3.5V18");
}
</style><g class="hntgybcog"><path class="xfrlrrb_j"/><path class="znwst_b2t"/></g>`,
		"fallback": "uix:water-butt",
	});
}

export default Component;
