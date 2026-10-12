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
		"content": `<style>.pjhv6acdz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.78 9.52L9.52 19.78l-1.41 1.41l-1.41-1.41l-2.48-2.48l-1.41-1.41l1.41-1.41L14.48 4.22l1.41-1.41l1.41 1.41l2.48 2.48l1.41 1.41zm-6.54-4.06l2.47 2.47m-4.42-.53l1.59 1.59m-3.53.36l2.47 2.47m-4.42-.53l1.59 1.59m-3.53.36l2.47 2.47");
}
</style><path class="pjhv6acdz"/>`,
		"fallback": "iconoven:ruler-corner-sharp",
	});
}

export default Component;
