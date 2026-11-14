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
		"content": `<style>.hw1d0qv4i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h5v5H3m0 6h5v5H3M8 6.5h5v11H8m5-5.5h8");
}
</style><path class="hw1d0qv4i"/>`,
		"fallback": "uix-sharp:playoffs",
	});
}

export default Component;
