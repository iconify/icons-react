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
		"content": `<style>.dwuvhwbbe {
  d: path("M3 9.5a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0M9.5 21v-6h5v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sxb0ow2xt {
  d: path("M3 21V9.5a10 10 0 0 1 18 0V21M3 9.5h18");
}
</style><g class="hntgybcog"><path class="sxb0ow2xt"/><path class="dwuvhwbbe"/></g>`,
		"fallback": "uix:market-hall",
	});
}

export default Component;
