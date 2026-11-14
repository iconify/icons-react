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
		"content": `<style>.lw51dibbx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 11h16v10.5H4Zm2-3h12v3H6Zm6 0c.5-3.25 2.75-5 6.5-5.25C18.25 6 16 8 12 8Z");
}
</style><path class="lw51dibbx"/>`,
		"fallback": "uix-sharp:organic-cosmetics",
	});
}

export default Component;
