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
		"content": `<style>.fizy7cxbw {
  fill: currentColor;
  d: path("M11.5 7h1A1.5 1.5 0 0 1 14 8.5V9a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 10 9v-.5A1.5 1.5 0 0 1 11.5 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oita7557l {
  d: path("M8 3C5 3 4 5 4 8s1.5 5 2.5 7l1 5c.25 1.25 1.75 1.25 2 0l1-4.5c.25-1 2.75-1 3 0l1 4.5c.25 1.25 1.75 1.25 2 0l1-5c1-2 2.5-4 2.5-7s-1-5-4-5c-1.5 0-2.5 1-4 1S9.5 3 8 3");
}
</style><g class="hntgybcog"><path class="oita7557l"/><path class="fizy7cxbw"/></g>`,
		"fallback": "uix:tooth-inlay",
	});
}

export default Component;
