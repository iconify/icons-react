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
		"content": `<style>.kv4v21boi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 5l8 7m8-7l-8 7m0 0v8m-2.75-2.75L12 20l2.75-2.75");
}
</style><path class="kv4v21boi"/>`,
		"fallback": "uix:loan-consolidate",
	});
}

export default Component;
