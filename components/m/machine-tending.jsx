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
		"content": `<style>.vwgqqybpx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5h7m-3.5 0L9.5 8M7 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm5 0h5.5V8m-2.25 2.5L17.5 8l2.25 2.5m-6.25 3v7h8v-7");
}
</style><path class="vwgqqybpx"/>`,
		"fallback": "uix-sharp:machine-tending",
	});
}

export default Component;
