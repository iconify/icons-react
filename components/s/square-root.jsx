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
		"content": `<style>.ady2embia {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13H5.5l3.25 7.25l4.5-16.5h8M14.5 9.5l5 6.25m0-6.25l-5 6.25");
}
</style><path class="ady2embia"/>`,
		"fallback": "iconoven:square-root",
	});
}

export default Component;
