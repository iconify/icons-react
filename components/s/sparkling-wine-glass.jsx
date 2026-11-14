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
		"content": `<style>.g6qx-439g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h7v7a3.5 3.5 0 0 1-7 0ZM12 13v8.5m-4 0h8m-4.75-12h.01m1.49-4h.01");
}
</style><path class="g6qx-439g"/>`,
		"fallback": "uix:sparkling-wine-glass",
	});
}

export default Component;
