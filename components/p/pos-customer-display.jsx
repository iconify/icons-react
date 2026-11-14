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
		"content": `<style>.kenllbbfl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h14v9H5Zm7 9v10m-4.5 0h9M8 5.5h3m-3 3h8");
}
</style><path class="kenllbbfl"/>`,
		"fallback": "uix-sharp:pos-customer-display",
	});
}

export default Component;
