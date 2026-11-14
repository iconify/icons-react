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
		"content": `<style>.mkf7nibhe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 4l5 3l-5 3ZM12 7h8.5m-17 6h17m-17 5.5H14");
}
</style><path class="mkf7nibhe"/>`,
		"fallback": "uix-sharp:playlist-play",
	});
}

export default Component;
