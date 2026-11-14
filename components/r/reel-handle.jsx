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
		"content": `<style>.cx1ksjbat {
  d: path("M8 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hrtakbcss {
  d: path("M2.5 14a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0m9-1.5L18 6m-.5-1a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M10 6.5v-3m-4 0h8");
}
</style><g class="hntgybcog"><path class="hrtakbcss"/><path class="cx1ksjbat"/></g>`,
		"fallback": "uix:reel-handle",
	});
}

export default Component;
