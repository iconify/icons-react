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
		"content": `<style>.euy6dybei {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14.714 6.457l4.243-4.243l2.829 2.829l-4.243 4.243Zm-12.5 12.5l4.243-4.243l2.829 2.829l-4.243 4.243ZM7.75 16.25l8.5-8.5");
}
</style><path class="euy6dybei"/>`,
		"fallback": "uix-sharp:kayak-paddle",
	});
}

export default Component;
