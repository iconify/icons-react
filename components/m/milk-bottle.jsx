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
		"content": `<style>.kxwgt-xkh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3.5h4v3c0 1.5 3 2 3 5V19a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-7.5c0-3 3-3.5 3-5ZM7 14h10");
}
</style><path class="kxwgt-xkh"/>`,
		"fallback": "uix:milk-bottle",
	});
}

export default Component;
