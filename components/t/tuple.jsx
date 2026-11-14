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
		"content": `<style>.bsoalskla {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3C4 6.5 4 17.5 7.5 21m9-18c3.5 3.5 3.5 14.5 0 18M9.75 8a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm0 5.75h4.5v4.5h-4.5Z");
}
</style><path class="bsoalskla"/>`,
		"fallback": "uix-sharp:tuple",
	});
}

export default Component;
