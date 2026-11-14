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
		"content": `<style>.a5w50b-8z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 4h15l-4 8.5h-15Zm-4 11.5h15m-15 3h15m-15 3h19M9 6.75h8m-9 3h5.5");
}
</style><path class="a5w50b-8z"/>`,
		"fallback": "uix-sharp:print-stack-output",
	});
}

export default Component;
