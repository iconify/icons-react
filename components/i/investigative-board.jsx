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
		"content": `<style>.a95ub6bhf {
  d: path("M6 4.5h12A3.5 3.5 0 0 1 21.5 8v8a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16V8A3.5 3.5 0 0 1 6 4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ttec-px7q {
  d: path("M6 15a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m9-6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-6.25 5.25l6.5-4.5M7 7.25h1a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5H7a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 7 7.25");
}
</style><g class="hntgybcog"><path class="a95ub6bhf"/><path class="ttec-px7q"/></g>`,
		"fallback": "uix:investigative-board",
	});
}

export default Component;
