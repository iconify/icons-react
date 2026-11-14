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

.s6krrlqxp {
  d: path("m11.5 12l2.5 2.5l4-5");
}

.x1h3iehcg {
  d: path("M4.126 10.226L7.22 6.851A2.63 2.63 0 0 1 9.155 6h9.22A2.625 2.625 0 0 1 21 8.625v6.75A2.625 2.625 0 0 1 18.375 18h-9.22a2.63 2.63 0 0 1-1.935-.851l-3.094-3.375a2.625 2.625 0 0 1 0-3.548M7.5 12h.01");
}
</style><g class="hntgybcog"><path class="x1h3iehcg"/><path class="s6krrlqxp"/></g>`,
		"fallback": "uix:status-label-created",
	});
}

export default Component;
