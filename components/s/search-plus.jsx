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
		"content": `<style>.o5bxarb2y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0Zm10.25 4.25l.75.75m3.5.5v6m-3-3h6");
}
</style><path class="o5bxarb2y"/>`,
		"fallback": "uix-sharp:search-plus",
	});
}

export default Component;
