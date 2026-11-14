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

.pa99b8bki {
  d: path("M9.75 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.yuffrdbmc {
  d: path("m5.5 6.5l1.5 4h10l1.5-4m-6.5 4V15m-5.5 6.5L12 15l5.5 6.5");
}
</style><g class="hntgybcog"><path class="pa99b8bki"/><path class="yuffrdbmc"/></g>`,
		"fallback": "uix:karateka",
	});
}

export default Component;
