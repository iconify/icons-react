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
		"content": `<style>.mxao4czmz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 5.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM3.5 12.5a6.5 1.5 0 1 0 13 0a6.5 1.5 0 1 0-13 0Zm16-10v19m-3-9h3M5 13.5l2.5 7m7.5-7l-2.5 7");
}
</style><path class="mxao4czmz"/>`,
		"fallback": "uix-sharp:netball",
	});
}

export default Component;
