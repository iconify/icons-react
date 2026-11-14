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
		"content": `<style>.txs6-ublb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3.5h7A3.5 3.5 0 0 1 19 7v7a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 14V7a3.5 3.5 0 0 1 3.5-3.5M3 20.5h18M8.5 7.5h7m-3.5 0V14");
}
</style><path class="txs6-ublb"/>`,
		"fallback": "uix:movable-type",
	});
}

export default Component;
