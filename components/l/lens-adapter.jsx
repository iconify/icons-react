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
		"content": `<style>.k7f1_wb4y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1v3.5h11v-1a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1h-11V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm9 3.5v9");
}
</style><path class="k7f1_wb4y"/>`,
		"fallback": "uix-sharp:lens-adapter",
	});
}

export default Component;
