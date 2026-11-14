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
		"content": `<style>.kff4gnb_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h19M5 5V3.5a1 1 0 0 1 1-1M9.75 5V3.5a1 1 0 0 1 1-1M14.5 5V3.5a1 1 0 0 1 1-1M19.25 5V3.5a1 1 0 0 1 1-1m-17 6L5 6.75L6.75 8.5V18h-3.5ZM8 8.5l1.75-1.75L11.5 8.5V20H8Zm4.75 0l1.75-1.75l1.75 1.75V17h-3.5Zm4.75 0l1.75-1.75L21 8.5V19h-3.5Z");
}
</style><path class="kff4gnb_q"/>`,
		"fallback": "uix:stock-hanging-rail",
	});
}

export default Component;
