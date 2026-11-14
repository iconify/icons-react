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

.sm46k33lu {
  d: path("M11.5 15h-5L9 17l-2.5 2h5m2.5-2h4");
}

.uk69ttbep {
  d: path("M6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11A3.5 3.5 0 0 1 6.5 3M3 8h18M3 13h18M9 3v10m6-10v10");
}
</style><g class="hntgybcog"><path class="uk69ttbep"/><path class="sm46k33lu"/></g>`,
		"fallback": "uix:table-subtotal",
	});
}

export default Component;
