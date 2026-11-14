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
		"content": `<style>.f5-egv69v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 6.5a2.25 1.75 0 1 0 4.5 0a2.25 1.75 0 1 0-4.5 0Zm-3.5 6a2.25 1.75 0 1 0 4.5 0a2.25 1.75 0 1 0-4.5 0Zm7 0a2.25 1.75 0 1 0 4.5 0a2.25 1.75 0 1 0-4.5 0Zm-10.5 6a2.25 1.75 0 1 0 4.5 0a2.25 1.75 0 1 0-4.5 0Zm7 0a2.25 1.75 0 1 0 4.5 0a2.25 1.75 0 1 0-4.5 0Zm7 0a2.25 1.75 0 1 0 4.5 0a2.25 1.75 0 1 0-4.5 0Z");
}
</style><path class="f5-egv69v"/>`,
		"fallback": "uix-sharp:sand-grains",
	});
}

export default Component;
