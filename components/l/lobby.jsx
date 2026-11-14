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
		"content": `<style>.rm08n0dud {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11h19M4 11v10.5h16V11M7.5 11a4.5 4.5 0 0 1 9 0ZM12 4.25h.01M4 18h16");
}
</style><path class="rm08n0dud"/>`,
		"fallback": "uix-sharp:lobby",
	});
}

export default Component;
