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
		"content": `<style>.ac7k3wx9y {
  d: path("M8 21.5q4 0 5-2");
}

.glm5l2b6m {
  d: path("M9 7.5v8a4 4 0 0 0 8 0v-8m-1-1c1-3 3.5-4.25 5.5-4c0 2.5-2 4-4.5 4.25M8 21.5c-2.5 0-5-1.5-5.5-4.5c3 0 5 1.5 5.5 4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y_6hsfz1n {
  d: path("M9 7.5a4 1.5 0 1 0 8 0a4 1.5 0 1 0-8 0");
}
</style><g class="hntgybcog"><path class="y_6hsfz1n"/><path class="glm5l2b6m"/><path class="ac7k3wx9y"/></g>`,
		"fallback": "uix:pitcher-plant",
	});
}

export default Component;
