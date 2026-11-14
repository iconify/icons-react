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
		"content": `<style>.ok9v8o52d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4v9m7.75-7.5c-.5-1-1.5-1.5-2.5-1.5c-1.5 0-2.5 1-2.5 2.25c0 3 5 1.5 5 4.5c0 1.25-1 2.25-2.5 2.25c-1.25 0-2.15-.6-2.5-1.5m8-3a3.25 4.5 0 1 0 6.5 0a3.25 4.5 0 1 0-6.5 0Zm-5 10.25h5.5");
}
</style><path class="ok9v8o52d"/>`,
		"fallback": "uix-sharp:iso-low",
	});
}

export default Component;
