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

.qkmssf62n {
  d: path("M10 4L10 20L4 14.5");
}

.v5zr4wbeq {
  d: path("M14 20L14 4L20 9.5");
}
</style><g class="hntgybcog"><path class="qkmssf62n"/><path class="v5zr4wbeq"/></g>`,
		"fallback": "solar:transfer-vertical-linear",
	});
}

export default Component;
