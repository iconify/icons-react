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
		"content": `<style>.yqn5qob_i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m6.75 2.75L17 18M13.5 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m1.25 2.75L7 18m3 1.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="yqn5qob_i"/>`,
		"fallback": "uix:paddle-ball",
	});
}

export default Component;
