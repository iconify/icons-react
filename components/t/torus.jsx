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

.k5zfoqnyx {
  d: path("M2.5 12a9.5 6.5 0 1 0 19 0a9.5 6.5 0 1 0-19 0");
}

.wo0e5vqgc {
  d: path("M7.5 11c2.25 2.25 6.75 2.25 9 0");
}

.zpyo8wbkc {
  d: path("M9 12.25c1.5-1 4.5-1 6 0");
}
</style><g class="hntgybcog"><path class="k5zfoqnyx"/><path class="wo0e5vqgc"/><path class="zpyo8wbkc"/></g>`,
		"fallback": "uix:torus",
	});
}

export default Component;
