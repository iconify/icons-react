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
		"content": `<style>.dwe7e9b_y {
  d: path("M8 3.5h8A3.5 3.5 0 0 1 19.5 7v10a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 17V7A3.5 3.5 0 0 1 8 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o2l9w1_cd {
  d: path("M8 8.5L9.5 10L12 7m-4 7l1.5 1.5l2.5-3M14 9h2m-2 5.5h2");
}
</style><g class="hntgybcog"><path class="dwe7e9b_y"/><path class="o2l9w1_cd"/></g>`,
		"fallback": "uix:picking-list",
	});
}

export default Component;
