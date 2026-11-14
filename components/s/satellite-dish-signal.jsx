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
		"content": `<style>.fl5zy8bvd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7a8 8 0 0 0 11 11Zm5.5 5.5l2-2M6.25 17v4.5m-2.75 0H9m4-14a3 3 0 0 1 2.5 2.5m-2-5.25a5.75 5.75 0 0 1 4.75 4.75M14 2.25A8.5 8.5 0 0 1 20.75 9");
}
</style><path class="fl5zy8bvd"/>`,
		"fallback": "uix-sharp:satellite-dish-signal",
	});
}

export default Component;
