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
		"content": `<style>.jlj7a6hhu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 3.75C10.5 3.75 12 4.5 12 6v12c0 1.5-1.5 2.25-3.25 2.25m6.5-16.5C13.5 3.75 12 4.5 12 6v12c0 1.5 1.5 2.25 3.25 2.25M9.5 12h5");
}
</style><path class="jlj7a6hhu"/>`,
		"fallback": "iconoven:text-cursor",
	});
}

export default Component;
