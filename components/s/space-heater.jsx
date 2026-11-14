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
		"content": `<style>.vba1duvnb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 9h12v12.5H6Zm4 3v6.5m4-6.5v6.5M10 6.25C8.75 5 11.25 3.75 10 2.5m4 3.75C12.75 5 15.25 3.75 14 2.5");
}
</style><path class="vba1duvnb"/>`,
		"fallback": "uix-sharp:space-heater",
	});
}

export default Component;
