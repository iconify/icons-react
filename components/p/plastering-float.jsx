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
		"content": `<style>.ic20ndhsd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 13h15.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 4.25 13M8 6.5h8A1.5 1.5 0 0 1 17.5 8A1.5 1.5 0 0 1 16 9.5H8A1.5 1.5 0 0 1 6.5 8A1.5 1.5 0 0 1 8 6.5m1 3V13m6-3.5V13");
}
</style><path class="ic20ndhsd"/>`,
		"fallback": "uix:plastering-float",
	});
}

export default Component;
