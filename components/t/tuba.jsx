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

.odq0kwbtm {
  d: path("M6 15.75a6 5.25 0 1 0 12 0a6 5.25 0 1 0-12 0m1.76-3.71L4.5 9.5M9 13.25v4m3-4v4m3-4v4");
}

.uccl4misb {
  d: path("M6.75 3.5q0-.75.75-.75h9q.75 0 .75.75c-.25 2.5-2.5 4.25-4 5v2h-2.5v-2c-1.5-.75-3.75-2.5-4-5");
}
</style><g class="hntgybcog"><path class="uccl4misb"/><path class="odq0kwbtm"/></g>`,
		"fallback": "iconoven:tuba",
	});
}

export default Component;
