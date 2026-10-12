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
		"content": `<style>.yuw7mdlsg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3v18M4 7h8m0 0q4.5 4.5 9 1m-4 4.25l-2 3h3l-2 3");
}
</style><path class="yuw7mdlsg"/>`,
		"fallback": "iconoven:telegram-wire-sharp",
	});
}

export default Component;
