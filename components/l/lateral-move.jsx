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
		"content": `<style>.ucww4h8ot {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11.25h7V21.5h-7Zm12 0h7V21.5h-7ZM4.5 6h15M17 3.5L19.5 6L17 8.5");
}
</style><path class="ucww4h8ot"/>`,
		"fallback": "uix-sharp:lateral-move",
	});
}

export default Component;
