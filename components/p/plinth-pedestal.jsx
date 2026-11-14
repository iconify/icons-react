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

.i8dqw68zb {
  d: path("M5.5 12h13a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 13.5A1.5 1.5 0 0 1 5.5 12m0 3v6.5h13V15");
}

.we7b3pbzo {
  d: path("M7.25 7.25a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0");
}
</style><g class="hntgybcog"><path class="we7b3pbzo"/><path class="i8dqw68zb"/></g>`,
		"fallback": "uix:plinth-pedestal",
	});
}

export default Component;
