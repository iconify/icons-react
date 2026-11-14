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
		"content": `<style>.ig5bj3bmq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm15 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-11 0h11M10 8H3.5M6 5.5L3.5 8L6 10.5M14 8h6.5M18 5.5L20.5 8L18 10.5");
}
</style><path class="ig5bj3bmq"/>`,
		"fallback": "uix-sharp:tension",
	});
}

export default Component;
