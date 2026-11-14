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
		"content": `<style>.s-_zcobjz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3L3 6l1.75 4.5L7 9.5V21h10V9.5l2.25 1L21 6l-5-3c-.5 2-2 3-4 3S8.5 5 8 3ZM7 13h10");
}
</style><path class="s-_zcobjz"/>`,
		"fallback": "uix-sharp:team-kit",
	});
}

export default Component;
