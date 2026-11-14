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
		"content": `<style>.g6joatcws {
  d: path("m4.026 5.158l4.5-1.5a1.5 1.5 0 0 1 .948 0l5.052 1.684a1.5 1.5 0 0 0 .948 0l3.552-1.184A1.5 1.5 0 0 1 21 5.581v11.838a1.5 1.5 0 0 1-1.026 1.423l-4.5 1.5a1.5 1.5 0 0 1-.948 0l-5.052-1.684a1.5 1.5 0 0 0-.948 0l-3.552 1.184A1.5 1.5 0 0 1 3 18.419V6.581a1.5 1.5 0 0 1 1.026-1.423");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xskmxvklv {
  d: path("M12 17c-2-2.5-3.5-4.25-3.5-6.25a3.5 3.5 0 0 1 7 0c0 2-1.5 3.75-3.5 6.25m0-6.25h.01");
}
</style><g class="hntgybcog"><path class="g6joatcws"/><path class="xskmxvklv"/></g>`,
		"fallback": "uix:travel-region-cover",
	});
}

export default Component;
