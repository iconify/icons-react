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
		"content": `<style>.sadsropaj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8L7 21.5h10L18.5 8M6.25 14.75h11.5M9.906 3.884l2.819-1.026a2 2 0 0 1 2.564 1.195a2 2 0 0 1-1.195 2.563l-2.819 1.026a2 2 0 0 1-2.564-1.195a2 2 0 0 1 1.195-2.563");
}
</style><path class="sadsropaj"/>`,
		"fallback": "uix:pill-water",
	});
}

export default Component;
