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
		"content": `<style>.d_q53vbhd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5h7v7h-7Zm10 0h7v7h-7Zm-10 10h7v7h-7Zm10 0h7v7h-7Z");
}
</style><path class="d_q53vbhd"/>`,
		"fallback": "uix-sharp:view-grid",
	});
}

export default Component;
