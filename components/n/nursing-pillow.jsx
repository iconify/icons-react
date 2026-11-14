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
		"content": `<style>.eqo917bug {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 5.75a9.5 8 0 1 0 12.5 0a2.5 2.5 0 0 0-4 3.25a3.5 3.5 0 1 1-4.5 0a2.5 2.5 0 0 0-4-3.25Z");
}
</style><path class="eqo917bug"/>`,
		"fallback": "uix-sharp:nursing-pillow",
	});
}

export default Component;
