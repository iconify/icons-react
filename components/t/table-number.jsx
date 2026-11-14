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
		"content": `<style>.b2melccis {
  d: path("m11 9.5l1.5-.5v6");
}

.jy1s42bgb {
  d: path("M3.5 6h17v12h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jy1s42bgb"/><path class="b2melccis"/></g>`,
		"fallback": "uix-sharp:table-number",
	});
}

export default Component;
