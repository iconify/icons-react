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
		"content": `<style>.fzt3q4vqs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.5h5V6c0 1 3.5 1.5 3.5 4v9.5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V10c0-2.5 3.5-3 3.5-4ZM6 13h12");
}
</style><path class="fzt3q4vqs"/>`,
		"fallback": "uix-sharp:liquid-nitrogen-dewar",
	});
}

export default Component;
