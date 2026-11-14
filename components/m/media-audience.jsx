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
		"content": `<style>.piptsbbxk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 2.5h12.5A1.75 1.75 0 0 1 20 4.25v1A1.75 1.75 0 0 1 18.25 7H5.75A1.75 1.75 0 0 1 4 5.25v-1A1.75 1.75 0 0 1 5.75 2.5M3 12.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M2.5 21.5a2.5 3.25 0 0 1 5 0h2a2.5 3.25 0 0 1 5 0h2a2.5 3.25 0 0 1 5 0");
}
</style><path class="piptsbbxk"/>`,
		"fallback": "uix:media-audience",
	});
}

export default Component;
