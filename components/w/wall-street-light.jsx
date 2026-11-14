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
		"content": `<style>.kerhdgnpz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v19M3 6h10v2.5m-10 2L7.5 6m3 2.5h5l-1 5h-3Zm2.5 8V19m-3.25-3L8.5 18m7.75-2l1.25 2");
}
</style><path class="kerhdgnpz"/>`,
		"fallback": "uix-sharp:wall-street-light",
	});
}

export default Component;
