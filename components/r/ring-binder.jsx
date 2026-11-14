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
		"content": `<style>.y3r9ewbit {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h14v19H5ZM3 7h4.5M3 12h4.5M3 17h4.5M11 8h5m-5 4h5");
}
</style><path class="y3r9ewbit"/>`,
		"fallback": "uix-sharp:ring-binder",
	});
}

export default Component;
