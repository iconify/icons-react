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
		"content": `<style>.uksba6jrb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 21.5c-2-2.25-3.5-4.25-3.5-6.25a3.5 3.5 0 0 1 7 0c0 2-1.5 4-3.5 6.25Zm11-9.25C15.5 10 14 8 14 6a3.5 3.5 0 0 1 7 0c0 2-1.5 4-3.5 6.25Zm-11 3h.01M17.5 6h.01M5.75 8.75h.01m1.99-2.5h.01m2.74-1.5h.01");
}
</style><path class="uksba6jrb"/>`,
		"fallback": "uix-sharp:remit-corridor",
	});
}

export default Component;
