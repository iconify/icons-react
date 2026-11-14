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
		"content": `<style>.yf6z61urx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9h18M3.5 9H10v5.5H3.5ZM14 9h6.5v5.5H14Zm-4 2h4");
}
</style><path class="yf6z61urx"/>`,
		"fallback": "uix-sharp:sunglasses",
	});
}

export default Component;
