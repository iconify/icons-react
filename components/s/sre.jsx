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
		"content": `<style>.vfq4y_y5d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 11.5a8 8 0 0 1 16 0m-8 0L15.5 8M3 15h18v5.5H3Zm4 2.75h.01");
}
</style><path class="vfq4y_y5d"/>`,
		"fallback": "uix-sharp:sre",
	});
}

export default Component;
