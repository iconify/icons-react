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
		"content": `<style>.kl8mmn0ca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 8H13c3.5 0 6.6 2.2 8 5a.75.75 0 0 1-.7 1H3.75a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1m1.75 2.75h9M7 17.25h1.5m7 0H17m-14 3h18");
}
</style><path class="kl8mmn0ca"/>`,
		"fallback": "iconoven:maglev",
	});
}

export default Component;
