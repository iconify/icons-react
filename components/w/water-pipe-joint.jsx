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
		"content": `<style>.lz7ss4z0f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 6h5v12h-5Zm-7 3h7m-7 6h7m5-6h7m-7 6h7");
}
</style><path class="lz7ss4z0f"/>`,
		"fallback": "uix-sharp:water-pipe-joint",
	});
}

export default Component;
