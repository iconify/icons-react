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
		"content": `<style>.uii_8dbum {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8m5-8h3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-3Zm-5 0v8M7 8v8m6.75-8h1.5m-1.5 8h1.5M4.5 12h.01m4.99 0h.01m9.99 0h.01");
}
</style><path class="uii_8dbum"/>`,
		"fallback": "uix-sharp:missing-values",
	});
}

export default Component;
