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

.j0977jdqt {
  d: path("m7.5 10l-2 2l2 2m7.5-2h3.5m-2-2l2 2l-2 2");
}

.p8-wsnt2j {
  d: path("M6 5h12a3.5 3.5 0 0 1 3.5 3.5v7A3.5 3.5 0 0 1 18 19H6a3.5 3.5 0 0 1-3.5-3.5v-7A3.5 3.5 0 0 1 6 5m6 0v14m-3-7H5.5");
}
</style><g class="hntgybcog"><path class="p8-wsnt2j"/><path class="j0977jdqt"/></g>`,
		"fallback": "uix:table-cells-split",
	});
}

export default Component;
