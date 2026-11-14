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
		"content": `<style>.z2hcvxbga {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7.5V5h3M10 5h4m3.5 0h3v2.5m0 3v3m0 3V19h-3M14 19h-4m-3.5 0h-3v-2.5m0-6v3m8.5-5v7M8.5 12h7");
}
</style><path class="z2hcvxbga"/>`,
		"fallback": "uix:selection-add",
	});
}

export default Component;
