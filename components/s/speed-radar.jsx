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
		"content": `<style>.jy1t89nms {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 5h7a3 3 0 0 1 3 3a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3a3 3 0 0 1 3-3m3 6l1.5 8.5h3.5L18 11M6.25 6a3 3 0 0 0 0 4M4 4a6 6 0 0 0 0 8");
}
</style><path class="jy1t89nms"/>`,
		"fallback": "uix:speed-radar",
	});
}

export default Component;
