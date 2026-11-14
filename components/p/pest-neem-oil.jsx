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
		"content": `<style>.pnki-9-3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 10.5h2.5A3.5 3.5 0 0 1 14 14v3.5a3.5 3.5 0 0 1-3.5 3.5H8a3.5 3.5 0 0 1-3.5-3.5V14A3.5 3.5 0 0 1 8 10.5m-1.5 0V4h7L16 6v1.5h-4.5v3M19 3.75h.01m-.01 3h.01m-.01 3h.01");
}
</style><path class="pnki-9-3s"/>`,
		"fallback": "uix:pest-neem-oil",
	});
}

export default Component;
