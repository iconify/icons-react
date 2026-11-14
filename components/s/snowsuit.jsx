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
		"content": `<style>.kpou5lnmj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 7c0-4.25 7-4.25 7 0l4 3l1 5.5h-2.75l-1.25-3v9H13l-1-6l-1 6H7.5v-9l-1.25 3H3.5l1-5.5Zm3.5.5v5");
}
</style><path class="kpou5lnmj"/>`,
		"fallback": "uix-sharp:snowsuit",
	});
}

export default Component;
