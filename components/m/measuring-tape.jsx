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

.o967cnlqg {
  d: path("M2.5 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}

.q57-bdc0m {
  d: path("M9 16h7c2.75 0 4 1.75 4 4.5M7 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m11.5 11h3");
}
</style><g class="hntgybcog"><path class="o967cnlqg"/><path class="q57-bdc0m"/></g>`,
		"fallback": "uix:measuring-tape",
	});
}

export default Component;
