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
		"content": `<style>.fkrf0z-ph {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.75h3.5m11.5 0h3.5m-15 0a2.5 2.5 0 0 1 2.5-2.5h6.5a2.5 2.5 0 0 1 2.5 2.5v7.5H6.25Zm0 7.5h11.5v5.5a2 2 0 0 1-2 2h-7.5a2 2 0 0 1-2-2Zm0 4.25h11.5");
}
</style><path class="fkrf0z-ph"/>`,
		"fallback": "iconoven:towel-rail",
	});
}

export default Component;
