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

.r53x24b-h {
  d: path("M6.25 10.5L11 2.75l4.5 6.5M5 20.5q2.25-1.75 4.5 0t4.5 0t4.5 0");
}

.xo7hw3bam {
  d: path("M9 9.25h11V13h-7.25A3.75 3.75 0 1 1 9 9.25");
}
</style><g class="hntgybcog"><path class="xo7hw3bam"/><path class="r53x24b-h"/></g>`,
		"fallback": "uix:water-polo-referee",
	});
}

export default Component;
