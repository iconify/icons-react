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
		"content": `<style>.phewqlbzw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 6.5h9.5M11 15h9.5m-17-7.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM7.5 5v4.25m-4 2.25V17m0-2a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="phewqlbzw"/>`,
		"fallback": "uix-sharp:list-alpha",
	});
}

export default Component;
