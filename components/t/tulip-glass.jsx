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
		"content": `<style>.plxvrqbrf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3h9c0 1.75-1 2.5-1 4s2 2.5 2 5s-2.5 4-5.5 4s-5.5-1.5-5.5-4s2-3.5 2-5s-1-2.25-1-4ZM12 16v5m-3.5 0h7");
}
</style><path class="plxvrqbrf"/>`,
		"fallback": "uix-sharp:tulip-glass",
	});
}

export default Component;
