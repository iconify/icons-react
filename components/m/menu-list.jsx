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
		"content": `<style>.fvgh5oi6o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h8.5M8 18h10.5");
}
</style><path class="fvgh5oi6o"/>`,
		"fallback": "uix:menu-list",
	});
}

export default Component;
