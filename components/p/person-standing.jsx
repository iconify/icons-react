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
		"content": `<style>.hjc-ahuhz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM12 8v6.5M9 21l3-6.5l3 6.5M7 9.5l5-1l5 1");
}
</style><path class="hjc-ahuhz"/>`,
		"fallback": "uix-sharp:person-standing",
	});
}

export default Component;
