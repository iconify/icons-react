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
		"content": `<style>.q5j_ez5bd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8h18v3.5H3Zm9 3.5l1.75 1.5l-3.5 2l3.5 2l-3.5 2L12 20.5M4.75 8l3.5-3.5");
}
</style><path class="q5j_ez5bd"/>`,
		"fallback": "uix-sharp:waiters-friend",
	});
}

export default Component;
