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
		"content": `<style>.xgu6i0bbe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3h10v4A5 5 0 0 1 7 7Zm5 9v9m-4 0h8M7 7h10");
}
</style><path class="xgu6i0bbe"/>`,
		"fallback": "uix-sharp:pin-wine",
	});
}

export default Component;
