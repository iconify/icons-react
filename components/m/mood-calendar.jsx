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
		"content": `<style>.km0e41b9z {
  d: path("M9 16.5q3 2.5 6 0");
}

.t-ikazujx {
  d: path("M3 4.5h18v17H3Zm5-2V6m8-3.5V6M3 9h18M9.5 13h.01m4.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t-ikazujx"/><path class="km0e41b9z"/></g>`,
		"fallback": "uix-sharp:mood-calendar",
	});
}

export default Component;
