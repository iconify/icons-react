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
		"content": `<style>.ot7qxub7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 7a8 4.5 0 1 0 16 0A8 4.5 0 1 0 4 7Zm8 4.5V14m0 0c-4 0-6.5 2.5-7.5 7m7.5-7c-1.5 1.5-3 4-3 7m3-7c1.5 1.5 3 4 3 7m-3-7c4 0 6.5 2.5 7.5 7m-17 0h19");
}
</style><path class="ot7qxub7j"/>`,
		"fallback": "uix-sharp:mangrove-tree",
	});
}

export default Component;
