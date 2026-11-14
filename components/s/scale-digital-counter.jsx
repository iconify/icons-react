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
		"content": `<style>.ozgz4e58r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5L4.5 15h15l1.5 5.5Zm1.5-8h15m-7.5-4v4M7 3h10v5.5H7Zm2.5 2.75h5");
}
</style><path class="ozgz4e58r"/>`,
		"fallback": "uix-sharp:scale-digital-counter",
	});
}

export default Component;
