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
		"content": `<style>.d41534_cy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 15h11l3.5 5.5H3ZM12 3v8.5M8.5 8l3.5 3.5L15.5 8");
}
</style><path class="d41534_cy"/>`,
		"fallback": "uix-sharp:pressure-mat",
	});
}

export default Component;
