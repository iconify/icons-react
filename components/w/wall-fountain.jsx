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
		"content": `<style>.nz4nakbav {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 2.5zA1.75 1.75 0 0 1 6 4.25v15.5a1.75 1.75 0 0 1-1.75 1.75a1.75 1.75 0 0 1-1.75-1.75V4.25A1.75 1.75 0 0 1 4.25 2.5M9 15h12.5A6.25 6.25 0 0 1 9 15M6 6h6.25q3 0 3 2.75m0 0V15m-2.75 0L11 12.75M18 15l1.5-2.25");
}
</style><path class="nz4nakbav"/>`,
		"fallback": "uix:wall-fountain",
	});
}

export default Component;
