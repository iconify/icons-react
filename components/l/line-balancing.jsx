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
		"content": `<style>.t6_1qjb9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18m-9 0v9.5m-4 0h8M4 5.5h5.5V11H4Zm10.5 0H20V11h-5.5Z");
}
</style><path class="t6_1qjb9x"/>`,
		"fallback": "uix-sharp:line-balancing",
	});
}

export default Component;
