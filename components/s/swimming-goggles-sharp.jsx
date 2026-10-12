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
		"content": `<style>.sm52xkb6d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8.75h1.5m15.5 0h1.5m-17-2.5h6.5v5h-6.5zm9 0h6.5v5h-6.5zm-2.5 2.5L12 7.244l1.25 1.506m-10.5 9c1.54 0 1.54-1 3.08-1s1.54 1 3.08 1s1.54-1 3.08-1s1.54 1 3.08 1s1.54-1 3.08-1s1.54 1 3.08 1");
}
</style><path class="sm52xkb6d"/>`,
		"fallback": "iconoven:swimming-goggles-sharp",
	});
}

export default Component;
