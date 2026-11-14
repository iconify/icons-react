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
		"content": `<style>.ia5fuu0cw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10h16v11.5H4Zm2.5 0V8a4 4 0 0 1 8 0v2m3 0V6.5m0 0c0-2.5 1.5-4 4-4c0 2.5-1.5 4-4 4Z");
}
</style><path class="ia5fuu0cw"/>`,
		"fallback": "uix-sharp:tote-bag-reusable",
	});
}

export default Component;
