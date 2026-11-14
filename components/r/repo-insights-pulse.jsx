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

.p8u760b4u {
  d: path("M3.5 3v17.5H21");
}

.ykwurabow {
  d: path("M6.5 13H9l2-6l3 10l2-6h4");
}
</style><g class="hntgybcog"><path class="p8u760b4u"/><path class="ykwurabow"/></g>`,
		"fallback": "uix:repo-insights-pulse",
	});
}

export default Component;
