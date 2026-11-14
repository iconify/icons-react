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
		"content": `<style>.y3t69g_rt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6h13v12h-13Zm13 4.5l6-3.5v10l-6-3.5ZM7 10l4 4m0-4l-4 4");
}
</style><path class="y3t69g_rt"/>`,
		"fallback": "uix-sharp:video-x",
	});
}

export default Component;
