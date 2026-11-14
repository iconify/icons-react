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
		"content": `<style>.b4c8wzbkz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 10h15v11.5h-15ZM8 10V7a4 4 0 0 1 8 0v3m-4 4v3.5");
}
</style><path class="b4c8wzbkz"/>`,
		"fallback": "uix-sharp:lock-line",
	});
}

export default Component;
