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
		"content": `<style>.sat9p0bso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3h4a3.5 3.5 0 0 1 3.5 3.5v11A3.5 3.5 0 0 1 14 21h-4a3.5 3.5 0 0 1-3.5-3.5v-11A3.5 3.5 0 0 1 10 3Zm2 3.5v3");
}
</style><path class="sat9p0bso"/>`,
		"fallback": "uix-sharp:mouse",
	});
}

export default Component;
