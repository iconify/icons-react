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
		"content": `<style>.kfm5k9byl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16a3 3 0 1 0 6 0a3 3 0 1 0-6 0M9 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0m6.5 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-8-2.5l2.5-3m4 0l2.5 3");
}
</style><path class="kfm5k9byl"/>`,
		"fallback": "uix:molecule",
	});
}

export default Component;
