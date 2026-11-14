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
		"content": `<style>.fpbi5utgk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11a6 6 0 1 0 12 0a6 6 0 1 0-12 0Zm10.25 4.25l5.25 5.25m0-17.5v5M16 5.5h5");
}
</style><path class="fpbi5utgk"/>`,
		"fallback": "uix-sharp:magnification",
	});
}

export default Component;
