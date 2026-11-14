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
		"content": `<style>.etatracfm {
  d: path("m18 3l2 2l-2 2m0 3l2 2l-2 2m0 3l2 2l-2 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l1azzd74z {
  d: path("M2.5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0H20M9 12c3 0 3-7 6-7h5M9 12c3 0 3 7 6 7h5");
}
</style><g class="hntgybcog"><path class="l1azzd74z"/><path class="etatracfm"/></g>`,
		"fallback": "uix:switch-case",
	});
}

export default Component;
