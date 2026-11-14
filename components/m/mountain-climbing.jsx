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
		"content": `<style>.tuyguab3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19L9 8l4 6l2.5-3.5l6 8.5ZM18 7V3.5L21 5h-3");
}
</style><path class="tuyguab3s"/>`,
		"fallback": "uix-sharp:mountain-climbing",
	});
}

export default Component;
