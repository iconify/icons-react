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
		"content": `<style>.x9na_igxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5v19m0-11h19V13h-19Zm0 7.5l5-5m-3-8.5H10v6H4.5Zm10.5 1h5.5v5H15Zm-2.5-3v8");
}
</style><path class="x9na_igxf"/>`,
		"fallback": "uix-sharp:shelf-divider",
	});
}

export default Component;
