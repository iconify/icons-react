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
		"content": `<style>.s-36m3b3y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 19C4 10 10 4 20 4c0 10-6 16-15 15Zm-2 2L15.5 8.5m-5 5v-4m0 4h4");
}
</style><path class="s-36m3b3y"/>`,
		"fallback": "uix-sharp:sage-leaf",
	});
}

export default Component;
