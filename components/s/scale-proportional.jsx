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
		"content": `<style>.bcvc8uidm {
  d: path("M13.5 6.5h4v4");
}

.c4oe8yruw {
  d: path("M6.125 12.5h2.75a2.625 2.625 0 0 1 2.625 2.625v2.75A2.625 2.625 0 0 1 8.875 20.5h-2.75A2.625 2.625 0 0 1 3.5 17.875v-2.75A2.625 2.625 0 0 1 6.125 12.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w8t62abch {
  d: path("M3.5 9V5.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H15M14 10l3.5-3.5");
}
</style><g class="hntgybcog"><path class="c4oe8yruw"/><path class="w8t62abch"/><path class="bcvc8uidm"/></g>`,
		"fallback": "uix:scale-proportional",
	});
}

export default Component;
