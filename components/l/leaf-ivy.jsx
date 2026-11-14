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
		"content": `<style>.uzxy5r3cg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l3.25 5.75L21 10l-3.5 5l-5.5 3l-5.5-3L3 10l5.75-1.75ZM12 18v3.5m0-3.5V7.5");
}
</style><path class="uzxy5r3cg"/>`,
		"fallback": "uix-sharp:leaf-ivy",
	});
}

export default Component;
