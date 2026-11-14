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
		"content": `<style>.ouk88jbqr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h6a3.5 3.5 0 0 1 3.5 3.5v3A3.5 3.5 0 0 1 12 13H6a3.5 3.5 0 0 1-3.5-3.5v-3A3.5 3.5 0 0 1 6 3m3 10v8m-3.5 0h7M20 6.5V14m-1.75-5.75L20 6.5l1.75 1.75m-3.5 4L20 14l1.75-1.75");
}
</style><path class="ouk88jbqr"/>`,
		"fallback": "uix:monitor-stand-adjust",
	});
}

export default Component;
