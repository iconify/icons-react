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
		"content": `<style>.agzvimewz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M3 21.5c0-4.5 2.75-7 6.5-7s6.5 2.5 6.5 7M19 5za2.5 2.5 0 0 1 2.5 2.5v3A2.5 2.5 0 0 1 19 13a2.5 2.5 0 0 1-2.5-2.5v-3A2.5 2.5 0 0 1 19 5m0 8v8.5");
}
</style><path class="agzvimewz"/>`,
		"fallback": "uix:podcast-mic-user",
	});
}

export default Component;
