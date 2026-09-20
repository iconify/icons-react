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

.kx2zklb7n {
  d: path("M13 9h5v6h-5Z");
}

.o19v3ublc {
  d: path("M5 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.r21jxhxfq {
  d: path("M3 5h18v14H3Z");
}
</style><g class="hntgybcog"><path class="r21jxhxfq"/><path class="o19v3ublc"/><path class="kx2zklb7n"/></g>`,
		"fallback": "iconmind:plant-cell-outline-thin",
	});
}

export default Component;
