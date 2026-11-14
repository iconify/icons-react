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
		"content": `<style>.h8qrxwbmd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20.5 8h-13a4.5 4.5 0 0 1 9 0M8 8v1.5a4 4 0 0 0 8 0V8M4.5 21.5C4.5 19 7.75 17 12 17s7.5 2 7.5 4.5");
}
</style><path class="h8qrxwbmd"/>`,
		"fallback": "uix-sharp:umpire",
	});
}

export default Component;
