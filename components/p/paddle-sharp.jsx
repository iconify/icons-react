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
		"content": `<style>.oh-t-272f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.32 9.68a4.5 2.5-45 1 1 6.36-6.36a4.5 2.5-45 1 1-6.36 6.36Zm-11 11a4.5 2.5-45 1 1 6.36-6.36a4.5 2.5-45 1 1-6.36 6.36Zm6.36-6.36l4.64-4.64");
}
</style><path class="oh-t-272f"/>`,
		"fallback": "iconoven:paddle-sharp",
	});
}

export default Component;
