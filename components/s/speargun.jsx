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
		"content": `<style>.s784h5boj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 8.5h13v3H5Zm2 3h3L9 17H6ZM2.5 10H5m13 0h3.5m-2-2l2 2l-2 2");
}
</style><path class="s784h5boj"/>`,
		"fallback": "uix-sharp:speargun",
	});
}

export default Component;
