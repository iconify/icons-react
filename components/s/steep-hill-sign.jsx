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

.t6n9kj4-o {
  d: path("M17 18.5H6.75L14 13.25");
}

.tuh7sugyf {
  d: path("m14.323 6.914l5.652 10.738a2.625 2.625 0 0 1-2.323 3.848H6.348a2.625 2.625 0 0 1-2.323-3.848L9.677 6.914a2.625 2.625 0 0 1 4.646 0");
}
</style><g class="hntgybcog"><path class="tuh7sugyf"/><path class="t6n9kj4-o"/></g>`,
		"fallback": "uix:steep-hill-sign",
	});
}

export default Component;
