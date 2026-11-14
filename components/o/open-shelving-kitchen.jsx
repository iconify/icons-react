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
		"content": `<style>.vvdq1jp3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18M3 20h18M3.5 7.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm9.75-3h5.5V11h-5.5ZM7 17h10l-1 3H8Z");
}
</style><path class="vvdq1jp3w"/>`,
		"fallback": "uix-sharp:open-shelving-kitchen",
	});
}

export default Component;
