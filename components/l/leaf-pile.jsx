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
		"content": `<style>.rj17_2sle {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16.25a5.75 5.75 0 0 1 8-4a5.75 5.75 0 0 1-8 4Zm11-4a5.75 5.75 0 0 1 8 4a5.75 5.75 0 0 1-8-4Zm-6-5a5.75 5.75 0 0 1 9 0a5.75 5.75 0 0 1-9 0Zm-4.5 12h18");
}
</style><path class="rj17_2sle"/>`,
		"fallback": "uix-sharp:leaf-pile",
	});
}

export default Component;
