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
		"content": `<style>.uf8kwx1ca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 8h11.5v8H6.25zm3.5 0v8m4.5-8v8m-11.5-4h3.5m11.5 0h3.5");
}
</style><path class="uf8kwx1ca"/>`,
		"fallback": "iconoven:rolling-pin-sharp",
	});
}

export default Component;
