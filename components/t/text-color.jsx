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
		"content": `<style>.pnlkqbc8p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 15l6-11.5L18 15m-9.75-4.25h7.5m-11 7.75h14.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 19.25 21H4.75a1.25 1.25 0 0 1-1.25-1.25a1.25 1.25 0 0 1 1.25-1.25");
}
</style><path class="pnlkqbc8p"/>`,
		"fallback": "uix:text-color",
	});
}

export default Component;
