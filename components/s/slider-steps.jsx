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
		"content": `<style>.kxvrfacns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9.5h8m6 0h4m-9.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-8.5 6v2m4.5-2v2m4.5-2v2m4.5-2v2m4.5-2v2");
}
</style><path class="kxvrfacns"/>`,
		"fallback": "uix-sharp:slider-steps",
	});
}

export default Component;
