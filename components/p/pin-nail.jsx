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
		"content": `<style>.p3pcxhbzi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.5h4v8h-4Zm0 8h4V12c3.5.5 5 2.5 5 5v2a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 19v-2c0-2.5 1.5-4.5 5-5ZM8 16v2.25");
}
</style><path class="p3pcxhbzi"/>`,
		"fallback": "uix-sharp:pin-nail",
	});
}

export default Component;
