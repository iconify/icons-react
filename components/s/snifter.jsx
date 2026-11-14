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
		"content": `<style>.myn79m-iq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 4h7c0 2 3.5 4 3.5 8a7 7 0 0 1-14 0c0-4 3.5-6 3.5-8ZM12 19v2m-3.5 0h7");
}
</style><path class="myn79m-iq"/>`,
		"fallback": "uix-sharp:snifter",
	});
}

export default Component;
