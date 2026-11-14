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
		"content": `<style>.eo--j44-t {
  d: path("m15.5 5l-1.75 5l2 3.5l-1.25 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l_pfslngb {
  d: path("m4.055 16.668l3.269-4.904a1.5 1.5 0 0 1 2.448-.068L10 12a1.468 1.468 0 0 0 2.515-.285l1.589-3.575a1.5 1.5 0 0 1 2.75.019l3.75 8.75A1.5 1.5 0 0 1 19.225 19H5.303a1.5 1.5 0 0 1-1.248-2.332");
}
</style><g class="hntgybcog"><path class="l_pfslngb"/><path class="eo--j44-t"/></g>`,
		"fallback": "uix:ridge",
	});
}

export default Component;
