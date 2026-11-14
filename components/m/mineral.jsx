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
		"content": `<style>.ogcupbgho {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3l4.5 5l-2 8.5h-5L7.5 8ZM3.5 21l3-4.5h11l3 4.5ZM12 3v13.5");
}
</style><path class="ogcupbgho"/>`,
		"fallback": "uix-sharp:mineral",
	});
}

export default Component;
