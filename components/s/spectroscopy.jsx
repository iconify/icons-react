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
		"content": `<style>.j5ab88bkb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 5.5l-6.5 13h13Zm-9.5 10l6-3m7 0l6-3m-6 3l6 1.5m-6-1.5l6 6");
}
</style><path class="j5ab88bkb"/>`,
		"fallback": "uix-sharp:spectroscopy",
	});
}

export default Component;
