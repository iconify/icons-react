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
		"content": `<style>.v4x61acjs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 12V8a1.5 1.5 0 0 1 3 0v3v-4.5a1.5 1.5 0 0 1 3 0V11V7a1.5 1.5 0 0 1 3 0v4v-2a1.5 1.5 0 0 1 3 0v5.5a6 6 0 0 1-6 6h-1c-2.25 0-3.5-1-4.75-2.75l-3-4.25a1.5 1.5 0 0 1 2.25-2ZM2.5 4.5h4M2.5 8H6");
}
</style><path class="v4x61acjs"/>`,
		"fallback": "uix-sharp:map-pan",
	});
}

export default Component;
