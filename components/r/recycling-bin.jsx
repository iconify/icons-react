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
		"content": `<style>.ercvg2asw {
  d: path("m13 8.75l3.25 6l.25-2m-1.25 3.75h-6.5l1.5 1.25m-2.5-3l3.25-6l-1.75.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.loklsz4ly {
  d: path("M3 3.5h18m-16.5 0V19a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V3.5");
}
</style><g class="hntgybcog"><path class="loklsz4ly"/><path class="ercvg2asw"/></g>`,
		"fallback": "uix:recycling-bin",
	});
}

export default Component;
