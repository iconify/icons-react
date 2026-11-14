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
		"content": `<style>.dlqnjwumc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5h19l-1 4.5h-17Zm9.5 0V7m0 0q-.75-2.75-3.5-2.5Q9.25 7.25 12 7m0 0q.75-2.75 3.5-2.5Q14.75 7.25 12 7m-6 7.5v-4m0 0q-.75-2.25-3-2q.75 2.25 3 2m0 0q.75-2.25 3-2q-.75 2.25-3 2m12 4v-4m0 0q-.75-2.25-3-2q.75 2.25 3 2m0 0q.75-2.25 3-2q-.75 2.25-3 2");
}
</style><path class="dlqnjwumc"/>`,
		"fallback": "uix:microgreens-tray",
	});
}

export default Component;
