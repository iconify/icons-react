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
		"content": `<style>.girn7w8yr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h14A2.5 2.5 0 0 1 21.5 5v3.5A2.5 2.5 0 0 1 19 11h-4.25a2.75 2.75 0 0 0-5.5 0H5a2.5 2.5 0 0 1-2.5-2.5V5A2.5 2.5 0 0 1 5 2.5M18 11c3 1.75-3 3.75 0 5.5m-.75 0H19a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-1.75a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5m-.5 3v2m2.75-2v2");
}
</style><path class="girn7w8yr"/>`,
		"fallback": "uix:vr-headset-cable",
	});
}

export default Component;
