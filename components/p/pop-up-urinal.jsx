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

.j_g7w4b4h {
  d: path("M5.5 11a3 3.75 0 1 0 6 0a3 3.75 0 1 0-6 0M19 15v6.5m-2.75-3.75L19 15l2.75 2.75");
}

.l5uldeu8q {
  d: path("M2.5 3h12v8.5c0 4-2.5 6.5-6 6.5s-6-2.5-6-6.5Zm0 18H14");
}
</style><g class="hntgybcog"><path class="l5uldeu8q"/><path class="j_g7w4b4h"/></g>`,
		"fallback": "uix:pop-up-urinal",
	});
}

export default Component;
