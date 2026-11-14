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
		"content": `<style>.hwb2inb0g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7.5h7v14H3Zm9.2 14H10v-19h8v9.3M6.5 11h.01m-.01 3.25h.01M6.5 17.5h.01M14 6h.01M14 9.25h.01M14 12.5h.01m.99 3.75h6m-1.75-1.75L21 16.25m0 3.5h-6m1.75 1.75L15 19.75");
}
</style><path class="hwb2inb0g"/>`,
		"fallback": "uix-sharp:treasury-intercompany",
	});
}

export default Component;
