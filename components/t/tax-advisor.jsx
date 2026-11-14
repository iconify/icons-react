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
		"content": `<style>.aysvekv7h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M2.5 20c0-3.75 3-6.5 6.5-6.5c1.5 0 2.75.3 3.75.75m2 7l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}
</style><path class="aysvekv7h"/>`,
		"fallback": "uix:tax-advisor",
	});
}

export default Component;
