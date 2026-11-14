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
		"content": `<style>.zhly4ibzq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h6.5l1 5L14 9.25a2 2 0 0 1 1.5 2v2.25H3Zm2 10.5v3m7-3v3m-9.5 0h10.8m4.864-.5H20a1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-1.5 1.5h-1.836a1.5 1.5 0 0 1-1.11-.491l-1.137-1.25a1.5 1.5 0 0 1 0-2.018l1.137-1.25a1.5 1.5 0 0 1 1.11-.491M18 18.75h.01");
}
</style><path class="zhly4ibzq"/>`,
		"fallback": "uix:skate-rental",
	});
}

export default Component;
