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

.kfu5cphrr {
  d: path("M9 11a2 2 0 0 1 2 -2h2.5a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H11a2 2 0 0 1 -2 -2");
}

.ymp2b4b6u {
  d: path("M15 5h5v8l-8 8 -8 -8V5h5");
}
</style><g class="hntgybcog"><path class="ymp2b4b6u"/><path class="kfu5cphrr"/></g>`,
		"fallback": "iconmind:virtual-patch-outline-thin",
	});
}

export default Component;
