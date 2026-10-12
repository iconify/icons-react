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
		"content": `<style>.dz0qhd46r {
  d: path("M7.75 9c.6-.75 1.9-.75 2.5 0m3.5 0c.6-.75 1.9-.75 2.5 0m-8 3h7.5a3.75 3.75 0 0 1-7.5 0M4 17.25C4.8 18.3 5.25 19 5.25 19.6a1.25 1.25 0 0 1-2.5 0c0-.6.45-1.3 1.25-2.35m16 0c.8 1.05 1.25 1.75 1.25 2.35a1.25 1.25 0 0 1-2.5 0c0-.6.45-1.3 1.25-2.35");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nr7ho51jq {
  cx: 12px;
  cy: 10.5px;
  r: 7.75px;
}
</style><g class="hntgybcog"><circle class="nr7ho51jq"/><path class="dz0qhd46r"/></g>`,
		"fallback": "iconoven:joy-tears",
	});
}

export default Component;
