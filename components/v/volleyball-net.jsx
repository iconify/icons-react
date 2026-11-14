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
		"content": `<style>.osn8lczpl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6h19v10h-19Zm0 5h19M7 6v10m5-10v10m5-10v10M3 16v5.5M21 16v5.5");
}
</style><path class="osn8lczpl"/>`,
		"fallback": "uix-sharp:volleyball-net",
	});
}

export default Component;
