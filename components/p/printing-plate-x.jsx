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
		"content": `<style>.xr-k0gbvj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h19v14h-19ZM9 9l6 6m0-6l-6 6M5.5 8.25h.01m12.99 0h.01");
}
</style><path class="xr-k0gbvj"/>`,
		"fallback": "uix-sharp:printing-plate-x",
	});
}

export default Component;
