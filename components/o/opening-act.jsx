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
		"content": `<style>.fvvrwesac {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19m-19 0h4q0 8-4 11.5Zm19 0h-4q0 8 4 11.5ZM3 20.5h18M9.5 5.5h5v8h-5Zm2.5 8v7");
}
</style><path class="fvvrwesac"/>`,
		"fallback": "uix-sharp:opening-act",
	});
}

export default Component;
