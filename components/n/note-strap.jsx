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
		"content": `<style>.jara-nb2x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.5h19V17h-19Zm1 14.5h17M9.5 5.5V17m5-11.5V17M6 11.25h.01m11.99 0h.01");
}
</style><path class="jara-nb2x"/>`,
		"fallback": "uix-sharp:note-strap",
	});
}

export default Component;
