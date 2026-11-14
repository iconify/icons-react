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

.nzq9s7bqa {
  d: path("M15.25 17.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4 1.75L21 21");
}

.pbhkuvb7s {
  d: path("M13.831 21H3V10.5L12 3l9 7.5v3.369");
}
</style><g class="hntgybcog"><path class="pbhkuvb7s"/><path class="nzq9s7bqa"/></g>`,
		"fallback": "uix:lab-search",
	});
}

export default Component;
