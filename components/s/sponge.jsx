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
		"content": `<style>.zo13fs09z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 6.5h6.5a5.25 5.25 0 0 1 5.25 5.25v1.5a5.25 5.25 0 0 1-5.25 5.25h-6.5a5.25 5.25 0 0 1-5.25-5.25v-1.5A5.25 5.25 0 0 1 8.75 6.5M3.5 10h17M9 14.5h.01m5.99 0h.01");
}
</style><path class="zo13fs09z"/>`,
		"fallback": "uix:sponge",
	});
}

export default Component;
