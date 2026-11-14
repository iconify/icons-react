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

.svo38jbaa {
  d: path("m6.5 5l1 16h9l1-16M6.75 9h10.5");
}

.vq2y_z06k {
  d: path("m13.5 9l2-6.5H13");
}
</style><g class="hntgybcog"><path class="svo38jbaa"/><path class="vq2y_z06k"/></g>`,
		"fallback": "uix:mango-lassi",
	});
}

export default Component;
