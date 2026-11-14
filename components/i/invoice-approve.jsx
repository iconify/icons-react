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

.jgv6wz72s {
  d: path("m2.5 5l3.25-1.5L9 5l3-1.5L15 5l3.25-1.5L21.5 5v14a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 19Zm0 10.5h19m-8 0v5");
}

.yfok0fbzg {
  d: path("m7.5 10l2.75 2.75L16 7");
}
</style><g class="hntgybcog"><path class="jgv6wz72s"/><path class="yfok0fbzg"/></g>`,
		"fallback": "uix:invoice-approve",
	});
}

export default Component;
