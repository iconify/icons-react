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
		"content": `<style>.d7-87iwoz {
  d: path("M3 9a3 3 0 0 0 6 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0M10 20v-4.5h4V20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.run5ny8xc {
  d: path("m3 9l1.5-5h15L21 9M4.5 11v9h15v-9");
}
</style><g class="hntgybcog"><path class="run5ny8xc"/><path class="d7-87iwoz"/></g>`,
		"fallback": "uix:seller-store",
	});
}

export default Component;
