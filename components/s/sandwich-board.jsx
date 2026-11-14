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
		"content": `<style>.dg9rafb2z {
  d: path("M8.99 2.5h6.02a1.75 1.75 0 0 1 1.727 1.471l1.936 12A1.75 1.75 0 0 1 16.945 18h-9.89a1.75 1.75 0 0 1-1.728-2.029l1.936-12A1.75 1.75 0 0 1 8.99 2.5M5.5 18l-1 3.5m14-3.5l1 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s0sd-ceke {
  d: path("M9 7c1-1.25 2 1.25 3 0s2 1.25 3 0m-6.25 3.5h6.5M8.5 14c1.25-1.25 2.5 1.25 3.75 0");
}
</style><g class="hntgybcog"><path class="dg9rafb2z"/><path class="s0sd-ceke"/></g>`,
		"fallback": "uix:sandwich-board",
	});
}

export default Component;
