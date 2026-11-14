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
		"content": `<style>.uy8uv0bdx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 6V3.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V6Zm.5 0v1.5Q6 8.75 6 11.5V20a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 20v-8.5q0-2.75-3.5-4V6M6 14.5h12");
}
</style><path class="uy8uv0bdx"/>`,
		"fallback": "uix:syrup-bottle",
	});
}

export default Component;
