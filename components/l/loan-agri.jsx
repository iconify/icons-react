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
		"content": `<style>.kcg67bb_i {
  d: path("M10 21.5v-15m0-2c-1-1-1-2 0-2.5c1 .5 1 1.5 0 2.5Zm0 5C8 9.5 6.5 8 6.25 6c2 0 3.5 1.5 3.75 3.5Zm0 0c2 0 3.5-1.5 3.75-3.5c-2 0-3.5 1.5-3.75 3.5Zm0 4.5c-2 0-3.5-1.5-3.75-3.5c2 0 3.5 1.5 3.75 3.5Zm0 0c2 0 3.5-1.5 3.75-3.5c-2 0-3.5 1.5-3.75 3.5Zm0 4.5c-2 0-3.5-1.5-3.75-3.5c2 0 3.5 1.5 3.75 3.5Zm4-.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kcg67bb_i"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:loan-agri",
	});
}

export default Component;
