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
		"content": `<style>.a8g-19bxt {
  d: path("M7 16.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0m3.5-12.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m1.5 1.5v6.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vh1bl84vx {
  d: path("M12 11.5q-4 0-6-3q4-.5 6 3m0 0q4 0 6-3q-4-.5-6 3");
}
</style><g class="hntgybcog"><path class="a8g-19bxt"/><path class="vh1bl84vx"/></g>`,
		"fallback": "uix:kokedama",
	});
}

export default Component;
