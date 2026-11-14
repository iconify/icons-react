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
		"content": `<style>.ihq6j-bnq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5za4 4 0 0 1 4 4v11a4 4 0 0 1-4 4a4 4 0 0 1-4-4v-11a4 4 0 0 1 4-4M8 9l-3.5 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1L8 15m8-6l3.5 1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1L16 15m-4-6.5v7");
}
</style><path class="ihq6j-bnq"/>`,
		"fallback": "uix:sanitary-pads",
	});
}

export default Component;
