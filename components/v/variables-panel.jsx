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
		"content": `<style>.a6h9wr90l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19v17h-19Zm3 4L8 10m0-2.5L5.5 10m5-2.5h2m-2 2.75h2m2.5-1.5h3.5M5.5 14L8 16.5M8 14l-2.5 2.5m5-2.5h2m-2 2.75h2m2.5-1.5h3.5");
}
</style><path class="a6h9wr90l"/>`,
		"fallback": "uix-sharp:variables-panel",
	});
}

export default Component;
