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
		"content": `<style>.ygtg059ou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.5h9V8h-9Zm1 7h7l-2.75 6h-1.5ZM6 19.5h12");
}
</style><path class="ygtg059ou"/>`,
		"fallback": "uix-sharp:printer-3d-nozzle",
	});
}

export default Component;
