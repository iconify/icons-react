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
		"content": `<style>.u5nmj3wym {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 10.5h12l-1.25 5H8.5Zm-2.5-3H6l2.5 8m0 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm6 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm3-9v-7m0 0l3 1.5l-3 1.5Z");
}
</style><path class="u5nmj3wym"/>`,
		"fallback": "uix-sharp:mini-cart",
	});
}

export default Component;
