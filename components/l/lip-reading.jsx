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
		"content": `<style>.x1sg5ij0z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 6.5c1.5-2 3.5-3 5.5-3s4 1 5.5 3c-1.5 2-3.5 3-5.5 3s-4-1-5.5-3Zm-2 9.5c2.5-3 5-3 7.5-1.75C14.5 13 17 13 19.5 16c-2.5 3.5-5 4.5-7.5 4.5s-5-1-7.5-4.5ZM12 6.5h.01M4.5 16h15");
}
</style><path class="x1sg5ij0z"/>`,
		"fallback": "uix-sharp:lip-reading",
	});
}

export default Component;
