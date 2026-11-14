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
		"content": `<style>.gtbzok9yn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5h16m-8 0V21M9.5 8.5l5-1.5m-5 5l5-1.5m-5 5l5-1.5m-5 5l5-1.5");
}
</style><path class="gtbzok9yn"/>`,
		"fallback": "uix:threaded-rod",
	});
}

export default Component;
