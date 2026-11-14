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
		"content": `<style>.avfm04bac {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 8.75h6.25V15H2Zm13.75 0H22V15h-6.25Zm-3.75 2v2.5M10.75 12h2.5");
}
</style><path class="avfm04bac"/>`,
		"fallback": "uix-sharp:promo-bogo",
	});
}

export default Component;
