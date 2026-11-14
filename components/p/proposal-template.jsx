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

.r2lff3lkq {
  d: path("M8.75 9.5h6.5A1.75 1.75 0 0 1 17 11.25v1A1.75 1.75 0 0 1 15.25 14h-6.5A1.75 1.75 0 0 1 7 12.25v-1A1.75 1.75 0 0 1 8.75 9.5M7 17.75h5.5");
}

.wu8vs8dug {
  d: path("M7.5 2.5h9A3.5 3.5 0 0 1 20 6v12a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 18V6a3.5 3.5 0 0 1 3.5-3.5m-.5 4h10");
}
</style><g class="hntgybcog"><path class="wu8vs8dug"/><path class="r2lff3lkq"/></g>`,
		"fallback": "uix:proposal-template",
	});
}

export default Component;
