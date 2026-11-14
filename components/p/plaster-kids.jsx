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
		"content": `<style>.gqhkf0wts {
  d: path("M8.5 7.5c-1 2.5-1 6.5 0 9m7-9c1 2.5 1 6.5 0 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vn_j8nq7w {
  d: path("M7 7.5h10a4.5 4.5 0 0 1 4.5 4.5a4.5 4.5 0 0 1-4.5 4.5H7A4.5 4.5 0 0 1 2.5 12A4.5 4.5 0 0 1 7 7.5");
}
</style><g class="hntgybcog"><path class="vn_j8nq7w"/><path class="gqhkf0wts"/></g>`,
		"fallback": "uix:plaster-kids",
	});
}

export default Component;
