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

.k0v1t97jg {
  d: path("M3 21.5V11a9 9 0 0 1 18 0v10.5");
}

.n_wsqz5bh {
  d: path("M6 13.5q1.5-1.5 3 0t3 0t3 0t3 0m-12 5q1.5-1.5 3 0t3 0t3 0t3 0");
}
</style><g class="hntgybcog"><path class="k0v1t97jg"/><path class="n_wsqz5bh"/></g>`,
		"fallback": "uix:mine-flooding",
	});
}

export default Component;
