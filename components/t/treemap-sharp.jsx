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
		"content": `<style>.s51-j07au {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h9.5v18.5h-9.5zm12 0h6.5v7.5h-6.5zm0 10h6.5v3.5h-6.5zm0 6h6.5v2.5h-6.5z");
}
</style><path class="s51-j07au"/>`,
		"fallback": "iconoven:treemap-sharp",
	});
}

export default Component;
