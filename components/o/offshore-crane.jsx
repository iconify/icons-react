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
		"content": `<style>.ed2s6qb4g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18h19M5 18v3.5M19 18v3.5M6.5 8.5H11V18H6.5Zm4.5 0L20.5 3m0 0v7.5");
}
</style><path class="ed2s6qb4g"/>`,
		"fallback": "uix-sharp:offshore-crane",
	});
}

export default Component;
