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
		"content": `<style>.bvs0_ebbc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 13h13L17 18.75H7ZM4 18.75h16l-1.5 2.75h-13ZM12 13V8m0 1.5c-4.5 0-7-2.5-7-7c4.5 0 7 2.5 7 7ZM12 8c4 0 7-2.25 7-5.5c-4 0-7 2-7 5.5Z");
}
</style><path class="bvs0_ebbc"/>`,
		"fallback": "uix-sharp:potted-plant-saucer",
	});
}

export default Component;
