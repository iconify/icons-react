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
		"content": `<style>.rfupezbba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-2-3.5a5 5 0 0 0 0 7m7-7a5 5 0 0 1 0 7M5.75 5.75a8.75 8.75 0 0 0 0 12.5m12.5-12.5a8.75 8.75 0 0 1 0 12.5");
}
</style><path class="rfupezbba"/>`,
		"fallback": "uix:radio-waves-broadcast",
	});
}

export default Component;
