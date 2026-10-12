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
		"content": `<style>.l3ltvp0-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 2.75h3.5v7h-3.5zm-2.75 7h9v3h-9zm1.5 3L8 21m4-8.25V21m3-8.25L16 21");
}
</style><path class="l3ltvp0-p"/>`,
		"fallback": "iconoven:pastry-brush-sharp",
	});
}

export default Component;
