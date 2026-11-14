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
		"content": `<style>.gctnhyu7e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h7m-3.5 0v3M4.5 9L12 5.5L19.5 9M6 9h12a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 18 21H6a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 6 9m3.5 0v12m5-12v12");
}
</style><path class="gctnhyu7e"/>`,
		"fallback": "uix:mine-cage",
	});
}

export default Component;
