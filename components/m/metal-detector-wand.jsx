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
		"content": `<style>.tkrg33oob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 18.5a7 3 0 1 0 14 0a7 3 0 1 0-14 0ZM4 2.5l9.5 13M7 6.75l-2.75 2");
}
</style><path class="tkrg33oob"/>`,
		"fallback": "uix-sharp:metal-detector-wand",
	});
}

export default Component;
