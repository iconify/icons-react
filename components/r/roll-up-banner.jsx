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
		"content": `<style>.rwmt00url {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 18V2.5h11V18M4 18h16v3.5H4ZM9 6h6M9 9h4.5M9 13.5h6");
}
</style><path class="rwmt00url"/>`,
		"fallback": "uix-sharp:roll-up-banner",
	});
}

export default Component;
