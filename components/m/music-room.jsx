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
		"content": `<style>.si2seq5do {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 12V4A1.5 1.5 0 0 1 6 2.5h12A1.5 1.5 0 0 1 19.5 4v8M4 12h16a1.5 1.5 0 0 1 1.5 1.5V15a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 15v-1.5A1.5 1.5 0 0 1 4 12m.5 4.5v5m15-5v5M6.5 12v2.25m3-2.25v2.25m5-2.25v2.25m3-2.25v2.25m-7 6.25h.01m2.99 0h.01");
}
</style><path class="si2seq5do"/>`,
		"fallback": "uix:music-room",
	});
}

export default Component;
