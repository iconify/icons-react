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
		"content": `<style>.jcnzjinkz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 9.5V14a7.5 7.5 0 0 0 15 0V9.5H16V14a4 4 0 0 1-8 0V9.5ZM9 5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-4.5 7.25H8m8 0h3.5");
}
</style><path class="jcnzjinkz"/>`,
		"fallback": "uix-sharp:lead-generation",
	});
}

export default Component;
