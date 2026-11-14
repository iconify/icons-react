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

.p5ci-jblb {
  d: path("m7.5 6.5l3.529-2.353a1.75 1.75 0 0 1 1.942 0L16.5 6.5a1.638 1.638 0 0 1-.908 3H8.408a1.638 1.638 0 0 1-.908-3M4 9.5V21h16V9.5");
}

.wbjzxcbfx {
  d: path("M12 13.5c-1.5-1-3.5-1.25-4.5-1V17c1-.25 3 0 4.5 1c1.5-1 3.5-1.25 4.5-1v-4.5c-1-.25-3 0-4.5 1m0 0V18");
}
</style><g class="hntgybcog"><path class="p5ci-jblb"/><path class="wbjzxcbfx"/></g>`,
		"fallback": "uix:publisher",
	});
}

export default Component;
