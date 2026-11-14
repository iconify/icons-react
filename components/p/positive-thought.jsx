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
		"content": `<style>.g9i5ok73g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 16.5A3.5 3.5 0 0 1 5.5 10A4.5 4.5 0 0 1 12 4.5a4.5 4.5 0 0 1 7.5 4a4.25 4.25 0 0 1-2 8ZM3.75 20a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM12.5 8v5M10 10.5h5");
}
</style><path class="g9i5ok73g"/>`,
		"fallback": "uix-sharp:positive-thought",
	});
}

export default Component;
