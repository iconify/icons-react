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

.toil9ablh {
  d: path("M21.5 6.5v12a3 3 0 0 1-3 3h-12m0-11a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}

.y1iewlb9a {
  d: path("M7.75 2.5h5.5a5.25 5.25 0 0 1 5.25 5.25v5.5a5.25 5.25 0 0 1-5.25 5.25h-5.5a5.25 5.25 0 0 1-5.25-5.25v-5.5A5.25 5.25 0 0 1 7.75 2.5");
}
</style><g class="hntgybcog"><path class="y1iewlb9a"/><path class="toil9ablh"/></g>`,
		"fallback": "uix:spatial-widget",
	});
}

export default Component;
