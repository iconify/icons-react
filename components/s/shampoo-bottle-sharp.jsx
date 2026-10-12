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
		"content": `<style>.pwe96ac4f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3.5h7.5m-2.5 0v2.75m-2.25 0h4.5v2.5h-4.5zm-3.5 5.5h11.5v9.5H6.25zM9.5 16.5h5");
}
</style><path class="pwe96ac4f"/>`,
		"fallback": "iconoven:shampoo-bottle-sharp",
	});
}

export default Component;
