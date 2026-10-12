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
		"content": `<style>.hw1rcxb9f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 3.75H12v16.5H8.75m6.5-16.5H12v16.5h3.25M9.5 12h5");
}
</style><path class="hw1rcxb9f"/>`,
		"fallback": "iconoven:text-cursor-sharp",
	});
}

export default Component;
