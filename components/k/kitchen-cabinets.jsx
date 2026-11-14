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
		"content": `<style>.zc3mw0bpu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h7.5v9H3Zm10.5 0H21v9h-7.5ZM2 16h20M3.5 16v5h17v-5M7.75 9.25h.01m8.49 0h.01");
}
</style><path class="zc3mw0bpu"/>`,
		"fallback": "uix-sharp:kitchen-cabinets",
	});
}

export default Component;
