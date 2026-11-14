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
		"content": `<style>.m64bh4aib {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 7H4.75l-.5 4.25c.5-.35 1.25-.5 2-.5c2 0 3.5 1.25 3.5 3.25c0 1.75-1.5 3-3.5 3c-1 0-2-.5-2.75-1m17.58-5.294A5 5 0 1 1 16.25 7m5 5H17");
}
</style><path class="m64bh4aib"/>`,
		"fallback": "uix-sharp:signal-5g",
	});
}

export default Component;
