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
		"content": `<style>.i274jabxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 9.5h11v12h-11Zm1-3.5h9v3.5h-9ZM9 2.5h6V6H9Zm.25 12h5.5");
}
</style><path class="i274jabxf"/>`,
		"fallback": "uix-sharp:vaccine-vial",
	});
}

export default Component;
