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
		"content": `<style>.rmlmxh04q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3v17a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V3m-7 4h7m-13 6h3.25m12.5 0h3.25m-2-2l2 2l-2 2");
}
</style><path class="rmlmxh04q"/>`,
		"fallback": "uix-sharp:spectro-cuvette-chem",
	});
}

export default Component;
