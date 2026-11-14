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

.j19bjfjln {
  d: path("M6 12a6 3.5 0 1 0 12 0a6 3.5 0 1 0-12 0");
}

.k5zfoqnyx {
  d: path("M2.5 12a9.5 6.5 0 1 0 19 0a9.5 6.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="k5zfoqnyx"/><path class="j19bjfjln"/></g>`,
		"fallback": "uix:round-rug",
	});
}

export default Component;
