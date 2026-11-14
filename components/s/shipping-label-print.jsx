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
		"content": `<style>.d2wszpj-u {
  d: path("M7 3.5h10v8H7Z");
}

.k5t7t7b3x {
  d: path("M3.5 9h17v9h-17Z");
}

.q-haombgm {
  d: path("M7 14h10v6.5H7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d2wszpj-u"/><path class="k5t7t7b3x"/><path class="q-haombgm"/></g>`,
		"fallback": "uix-sharp:shipping-label-print",
	});
}

export default Component;
