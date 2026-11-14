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
		"content": `<style>.pof3fcc7b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 16a3 3 0 0 1 0-6a4.5 4.5 0 0 1 8 1a2.5 2.5 0 0 1 1 5Zm14-13.5A3.5 3.5 0 1 0 21 8a3 3 0 0 1-1.5-5.5ZM6 19.5h.01m3.99 1h.01m3.99-1h.01");
}
</style><path class="pof3fcc7b"/>`,
		"fallback": "uix-sharp:moon-cloud-snow",
	});
}

export default Component;
