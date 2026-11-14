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
		"content": `<style>.a4pjlvm0y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 9.25h9V21.5h-9ZM10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="a4pjlvm0y"/>`,
		"fallback": "uix-sharp:station-symbol",
	});
}

export default Component;
