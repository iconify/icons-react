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

.jveapdqmh {
  d: path("M3.25 14.75a6.75 6.75 0 1 0 13.5 0a6.75 6.75 0 1 0-13.5 0M20 2.5a3 3 0 1 0 1 4a2.5 2.5 0 0 1-1-4");
}

.k7j2s4mko {
  d: path("M6.25 13.5q1.25 1.5 2.5 0m2.5 0q1.25 1.5 2.5 0");
}
</style><g class="hntgybcog"><path class="jveapdqmh"/><path class="k7j2s4mko"/></g>`,
		"fallback": "uix:kid-sleepy",
	});
}

export default Component;
