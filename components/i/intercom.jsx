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
		"content": `<style>.hg15ysbqv {
  d: path("M9.5 2.5h5A3.5 3.5 0 0 1 18 6v12a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 6 18V6a3.5 3.5 0 0 1 3.5-3.5M9 6h6M9 8.75h6M9 11.5h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.plksdhbjo {
  d: path("M10 16.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="hg15ysbqv"/><path class="plksdhbjo"/></g>`,
		"fallback": "uix:intercom",
	});
}

export default Component;
