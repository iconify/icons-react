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
		"content": `<style>.lt2muob8q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm7.5 7.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM3 15L15 3m-.75 15L18 14.5l3.75 3.5v3.75h-7.5Z");
}
</style><path class="lt2muob8q"/>`,
		"fallback": "uix-sharp:property-tax",
	});
}

export default Component;
