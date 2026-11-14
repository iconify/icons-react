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
		"content": `<style>.r7x5vubcv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 10.5l-3.5-5c0-3.5 16-3.5 16 0l-3.5 5c0 3.5-9 3.5-9 0Zm0 0h9m1 5.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1.75 6c0-1.75 1.75-3 3.75-3s3.75 1.25 3.75 3");
}
</style><path class="r7x5vubcv"/>`,
		"fallback": "uix-sharp:patrol-officer-walking",
	});
}

export default Component;
