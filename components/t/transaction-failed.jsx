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
		"content": `<style>.kdxwxoqhl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h10V20l-2-1.5l-2 1.5l-2-1.5l-2 1.5l-2-1.5Zm3 4.5h4m-4 4H8m10 3.75v3.5M18 21h.01");
}
</style><path class="kdxwxoqhl"/>`,
		"fallback": "uix-sharp:transaction-failed",
	});
}

export default Component;
