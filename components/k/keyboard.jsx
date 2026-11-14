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
		"content": `<style>.m442okpzr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 6h20v12H2Zm4 3.75h.01m3.99 0h.01m3.99 0h.01m3.99 0h.01M6 14.25h.01m2.49 0h7m2.5 0h.01");
}
</style><path class="m442okpzr"/>`,
		"fallback": "uix-sharp:keyboard",
	});
}

export default Component;
