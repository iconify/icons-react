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
		"content": `<style>.b_xiqgb5v {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.9 8.5h10.6V11H21v7.5h-2.5V16H15v2.5H9V16H5.5v2.5H3V11h3.5V8.5z");
}

.h9qa0mbnm {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 12.75h.01m4.99 0h.01");
}

.r_a-sdb5w {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 6L6.5 3.5M16 6l1.5-2.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="b_xiqgb5v"/><path class="h9qa0mbnm"/><path class="r_a-sdb5w"/></g>`,
		"fallback": "iconoven:space-invader-sharp",
	});
}

export default Component;
