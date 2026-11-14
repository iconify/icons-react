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
		"content": `<style>.e7j-t_b0r {
  d: path("M2.5 18c5 0 10-1 13.25-4.5a5.5 5.5 0 1 0-7.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hze1ucbjj {
  d: path("M8.25 13.5C11.5 17 16.5 18 21.5 18");
}
</style><g class="hntgybcog"><path class="e7j-t_b0r"/><path class="hze1ucbjj"/></g>`,
		"fallback": "uix:overhand-knot",
	});
}

export default Component;
