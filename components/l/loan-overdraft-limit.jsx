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
		"content": `<style>.lyridbsdc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 5.5l3.5 1l3 4l3 4.5l2 1.75h7.5m-19 2.75h19v2h-19Zm0-9H4m8.5 0H14m2.5 0H18m2 0h1.5");
}
</style><path class="lyridbsdc"/>`,
		"fallback": "uix-sharp:loan-overdraft-limit",
	});
}

export default Component;
