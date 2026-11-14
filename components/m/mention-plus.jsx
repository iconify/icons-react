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

.ibwg40bft {
  d: path("M7.25 9.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.r7-gbuhzd {
  d: path("M12.25 7.25V11a2.125 2.125 0 0 0 4.25 0V9.75a6.75 6.75 0 1 0-2 4.75m3.5.5v6m-3-3h6");
}
</style><g class="hntgybcog"><path class="ibwg40bft"/><path class="r7-gbuhzd"/></g>`,
		"fallback": "uix:mention-plus",
	});
}

export default Component;
