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
		"content": `<style>.c045-yb6a {
  d: path("M9 15c0-1.5-3-3-3-6.5a6 6 0 0 1 12 0c0 3.5-3 5-3 6.5Zm0 0v2.5h6V15m-4.5 2.5V21m3-3.5V21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mlb7ycbzh {
  d: path("m9.5 11l1.25-2.5L12 11l1.25-2.5L14.5 11");
}
</style><g class="hntgybcog"><path class="c045-yb6a"/><path class="mlb7ycbzh"/></g>`,
		"fallback": "uix:lightbulb-led",
	});
}

export default Component;
