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
		"content": `<style>.oi18iq0cc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 12.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-3 9c0-1.25 2.75-2.25 7-2.25s7 1 7 2.25m-7-13V3M7.25 9.5V5m5.5 4.5V5m6.75-1.5L17 8h3l-2.5 4.5");
}
</style><path class="oi18iq0cc"/>`,
		"fallback": "uix:static-electricity",
	});
}

export default Component;
