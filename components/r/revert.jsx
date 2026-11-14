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
		"content": `<style>.hs4ne2wsc {
  d: path("M11 6L8 9l3 3M4 5v8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xj7nnm-0n {
  d: path("M20 19v-5a5 5 0 0 0-5-5H8");
}
</style><g class="ulnmmdpxh"><path class="xj7nnm-0n"/><path class="hs4ne2wsc"/></g>`,
		"fallback": "uix-sharp:revert",
	});
}

export default Component;
