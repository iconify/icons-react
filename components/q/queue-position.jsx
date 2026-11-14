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
		"content": `<style>.bic679bks {
  d: path("M10.5 3.5h9A1.5 1.5 0 0 1 21 5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 9 5a1.5 1.5 0 0 1 1.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xrg1pyeax {
  fill: currentColor;
  d: path("M10.5 10.5h9A1.5 1.5 0 0 1 21 12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 9 12a1.5 1.5 0 0 1 1.5-1.5");
}

.yh3n9ccbi {
  d: path("M10.5 17.5h9A1.5 1.5 0 0 1 21 19a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 9 19a1.5 1.5 0 0 1 1.5-1.5M3 9.5L5.5 12L3 14.5");
}
</style><g class="hntgybcog"><path class="bic679bks"/><path class="xrg1pyeax"/><path class="yh3n9ccbi"/></g>`,
		"fallback": "uix:queue-position",
	});
}

export default Component;
