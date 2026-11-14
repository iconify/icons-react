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
		"content": `<style>.qzn1l86fz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3L7 6.5L3.5 10m6 0H14m-6.5 3h14v8.5h-14Zm3 3H18m-7.5 2.75h5");
}
</style><path class="qzn1l86fz"/>`,
		"fallback": "uix-sharp:shell-completion",
	});
}

export default Component;
