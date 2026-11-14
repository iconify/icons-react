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
		"content": `<style>.r5vjeebvr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5c2.5 2 3 4.5 3 7V15H9V9.5c0-2.5.5-5 3-7m-3 9L6.5 15v2L9 15m6-3.5l2.5 3.5v2L15 15m-4.5 3l-1 3m4-3l1 3");
}
</style><path class="r5vjeebvr"/>`,
		"fallback": "uix:water-rocket",
	});
}

export default Component;
