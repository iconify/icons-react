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
		"content": `<style>.xlc_cwbhg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5h17m-17 5h17m-17 5H10m6 2.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-1.5-3a4.25 4.25 0 0 0 0 6m6-6a4.25 4.25 0 0 1 0 6");
}
</style><path class="xlc_cwbhg"/>`,
		"fallback": "uix:radio-playlist",
	});
}

export default Component;
