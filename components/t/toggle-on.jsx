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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n_axcacrg {
  d: path("M8 6.5h8a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H8A5.5 5.5 0 0 1 2.5 12A5.5 5.5 0 0 1 8 6.5");
}

.vbcts5bmt {
  d: path("M13 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-5.5-1.75v3.5");
}
</style><g class="hntgybcog"><path class="n_axcacrg"/><path class="vbcts5bmt"/></g>`,
		"fallback": "uix:toggle-on",
	});
}

export default Component;
