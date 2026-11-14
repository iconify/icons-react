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
		"content": `<style>.sblc1nb0m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.375 4.005l2.998 1.729a1.75 1.75 0 0 1 0 3.032l-2.998 1.729a1.75 1.75 0 0 1-1.75 0L5.627 8.766a1.75 1.75 0 0 1 0-3.032l2.998-1.729a1.75 1.75 0 0 1 1.75 0M3 11.25L9.5 15l6.5-3.75M3 15l6.5 3.75L16 15m3.5 5V4.25m-2 2l2-2l2 2");
}
</style><path class="sblc1nb0m"/>`,
		"fallback": "uix:layers-front",
	});
}

export default Component;
