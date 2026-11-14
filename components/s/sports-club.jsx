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

.lbrqr8yam {
  d: path("M3.5 14.5L12 8l8.5 6.5v7h-17ZM12 8V2.5m1.437.431l1.063.319a.783.783 0 0 1 0 1.5l-1.063.319A1.116 1.116 0 0 1 12 4a1.116 1.116 0 0 1 1.437-1.069");
}

.lxhoymbab {
  d: path("M10 21.5v-4h4v4");
}
</style><g class="hntgybcog"><path class="lbrqr8yam"/><path class="lxhoymbab"/></g>`,
		"fallback": "uix:sports-club",
	});
}

export default Component;
