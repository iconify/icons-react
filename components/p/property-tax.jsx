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

.ig3cbgbmm {
  d: path("M6.5 2.75h11A1.25 1.25 0 0 1 18.75 4v17.25l-2.25-1.5l-2.25 1.5l-2.25-1.5l-2.25 1.5l-2.25-1.5l-2.25 1.5V4A1.25 1.25 0 0 1 6.5 2.75");
}

.trtr_nttu {
  d: path("M9 11.15V9.1q0-.6.46-.98l2.08-1.74q.46-.38.92 0l2.08 1.74q.46.38.46.98v2.05q0 .6-.6.6H9.6q-.6 0-.6-.6M8.5 15h7");
}
</style><g class="hntgybcog"><path class="ig3cbgbmm"/><path class="trtr_nttu"/></g>`,
		"fallback": "iconoven:property-tax",
	});
}

export default Component;
