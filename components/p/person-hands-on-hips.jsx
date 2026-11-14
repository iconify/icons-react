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
		"content": `<style>.d8r959bzr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 4.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm2.25 10l-6.5-2.75l3-2.25h7l3 2.25Zm-4 7l4-7l4 7m-4-12v5");
}
</style><path class="d8r959bzr"/>`,
		"fallback": "uix-sharp:person-hands-on-hips",
	});
}

export default Component;
