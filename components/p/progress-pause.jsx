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
		"content": `<style>.oy8o3rb8p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 8h2a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4a4 4 0 0 1 4-4m-1 4h4m7-2.5v5m3.5-5v5");
}
</style><path class="oy8o3rb8p"/>`,
		"fallback": "uix:progress-pause",
	});
}

export default Component;
