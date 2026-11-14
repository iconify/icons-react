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
		"content": `<style>.bdtghcjdh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5h17m-17 5.5H10M3.5 16H8m4-2a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm6 2.5l2.5 2.5");
}
</style><path class="bdtghcjdh"/>`,
		"fallback": "uix-sharp:search-list",
	});
}

export default Component;
