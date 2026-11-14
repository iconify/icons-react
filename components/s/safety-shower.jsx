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

.peglnlarz {
  d: path("M5 20.5v-17h9V6");
}

.tsx0c6f3d {
  d: path("M10 10a4 4 0 0 1 8 0ZM3 20.5h18M11.5 13l-1 3.5M14 13v3.5m2.5-3.5l1 3.5");
}
</style><g class="hntgybcog"><path class="peglnlarz"/><path class="tsx0c6f3d"/></g>`,
		"fallback": "uix:safety-shower",
	});
}

export default Component;
