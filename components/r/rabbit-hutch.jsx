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

.i1o89f13j {
  d: path("M9.5 17.5v-4a2.5 2.5 0 0 1 5 0v4");
}

.wlxb561rh {
  d: path("m3.5 8l17-4v13.5h-17ZM6 17.5V21m12-3.5V21");
}
</style><g class="hntgybcog"><path class="wlxb561rh"/><path class="i1o89f13j"/></g>`,
		"fallback": "uix:rabbit-hutch",
	});
}

export default Component;
