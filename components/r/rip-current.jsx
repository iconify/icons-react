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

.nzyov2b1h {
  d: path("m9 7l3-3l3 3M2.5 10.5q1.5-1.5 3 0t3 0m7 0q1.5-1.5 3 0t3 0m-19 5q1.5-1.5 3 0t3 0m7 0q1.5-1.5 3 0t3 0");
}

.vc1h42-ij {
  d: path("M12 21c0-6-1-11 0-17");
}
</style><g class="hntgybcog"><path class="vc1h42-ij"/><path class="nzyov2b1h"/></g>`,
		"fallback": "uix:rip-current",
	});
}

export default Component;
