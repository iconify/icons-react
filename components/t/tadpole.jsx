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
		"content": `<style>.uvizdbi7f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 7.5c2 0 3.5 1 4.25 2.5c2.75-.75 3.75 1.5 5.75 1.25C19 11 20 10 21.5 10.5c-1.5 1.5-2.5 2.75-4.25 3c-2.25.25-3.25-.75-5.5.5c-.75 1.5-2.25 2.5-4.25 2.5C5 16.5 3 14.5 3 12s2-4.5 4.5-4.5Zm-1 3.5h.01");
}
</style><path class="uvizdbi7f"/>`,
		"fallback": "uix-sharp:tadpole",
	});
}

export default Component;
