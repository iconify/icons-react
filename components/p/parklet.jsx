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
		"content": `<style>.y4-kleeba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 6.5h16m-11 0l-3.5 11m9.5-11l3.5 11m-16-5h19M2 20.5h20");
}
</style><path class="y4-kleeba"/>`,
		"fallback": "uix-sharp:parklet",
	});
}

export default Component;
