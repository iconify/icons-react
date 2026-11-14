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
		"content": `<style>.t8h-3eywj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19.5L3.5 8L9 4.5L20.5 6l1 13.5Zm.5-8l18-1.75m-18.25 6l18.5-1.5");
}
</style><path class="t8h-3eywj"/>`,
		"fallback": "uix-sharp:sandstone",
	});
}

export default Component;
