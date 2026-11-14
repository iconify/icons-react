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
		"content": `<style>.fdg_2nbfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7.5H4.5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2H7m0-17h14.5v17H7Zm7.25 0h.01M10 7.5h8.5m-8.5 4h8.5m-8.5 4h5");
}
</style><path class="fdg_2nbfd"/>`,
		"fallback": "uix-sharp:press-coverage",
	});
}

export default Component;
