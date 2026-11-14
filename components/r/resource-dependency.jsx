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
		"content": `<style>.a8kt6mb0q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM15 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM3 18.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM8.75 7l6.5 3.5M8.75 17l6.5-3.5M6 8.5v7");
}
</style><path class="a8kt6mb0q"/>`,
		"fallback": "uix-sharp:resource-dependency",
	});
}

export default Component;
