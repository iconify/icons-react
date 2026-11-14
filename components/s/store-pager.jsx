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

.nwrftd82o {
  d: path("M5.5 12a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}

.ofjvuib0t {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3 0h.01M3.5 8.5c-1 2-1 5 0 7m17-7c1 2 1 5 0 7");
}
</style><g class="hntgybcog"><path class="nwrftd82o"/><path class="ofjvuib0t"/></g>`,
		"fallback": "uix:store-pager",
	});
}

export default Component;
