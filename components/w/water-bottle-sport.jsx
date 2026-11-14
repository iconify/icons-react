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
		"content": `<style>.odtaf35-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 8h11v13.5h-11Zm2-3.25h7V8h-7ZM12 2.5v2.25M6.5 13h11");
}
</style><path class="odtaf35-z"/>`,
		"fallback": "uix-sharp:water-bottle-sport",
	});
}

export default Component;
