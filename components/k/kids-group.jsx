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
		"content": `<style>.kc447mbqb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 20.75V13a2.25 2.25 0 0 1 4.5 0v7.75m-4.5-15a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm-7.5 15v-3a2.5 2.5 0 0 1 5 0v3M3 11.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm13.75 9.5v-5a2.5 2.5 0 0 1 5 0v5M17.5 9.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><path class="kc447mbqb"/>`,
		"fallback": "uix-sharp:kids-group",
	});
}

export default Component;
