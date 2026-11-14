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
		"content": `<style>.b0e83ac1q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h14v7h-14Zm5 10h14v7h-14ZM6 7h.01M10 7h3m-2 10h.01M15 17h3");
}
</style><path class="b0e83ac1q"/>`,
		"fallback": "uix-sharp:server-copy",
	});
}

export default Component;
