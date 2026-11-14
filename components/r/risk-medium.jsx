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
		"content": `<style>.gar9k7mqs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 15.5a8.5 8.5 0 0 1 17 0m-8.5 0v-7m0 7h.01M3.5 20h17");
}
</style><path class="gar9k7mqs"/>`,
		"fallback": "uix:risk-medium",
	});
}

export default Component;
