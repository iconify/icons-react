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
		"content": `<style>.gmwd9dm9d {
  d: path("M18.364 4.636za1.25 1.25 0 0 1 0 1.768l-3.889 3.889a1.25 1.25 0 0 1-1.768 0a1.25 1.25 0 0 1 0-1.768l3.889-3.889a1.25 1.25 0 0 1 1.768 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n1m5xy8cg {
  d: path("M12.707 10.293za2.5 2.5 0 0 1 0 3.535l-1.061 1.061a2.5 2.5 0 0 1-3.535 0a2.5 2.5 0 0 1 0-3.535l1.061-1.061a2.5 2.5 0 0 1 3.535 0M5.5 16.75l1.5 2a1.75 1.75 0 1 1-3 0Z");
}
</style><g class="hntgybcog"><path class="gmwd9dm9d"/><path class="n1m5xy8cg"/></g>`,
		"fallback": "uix:paint-touchup",
	});
}

export default Component;
