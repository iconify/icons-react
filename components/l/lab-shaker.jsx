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
		"content": `<style>.hd2v7756z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 3v5.5l-4 8h11l-4-8V3m-4 0h5M4 19.75h16M20 7a6 6 0 0 1 0 8M4 7a6 6 0 0 0 0 8");
}
</style><path class="hd2v7756z"/>`,
		"fallback": "uix-sharp:lab-shaker",
	});
}

export default Component;
