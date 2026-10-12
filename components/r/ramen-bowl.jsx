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
		"content": `<style>.cfhrd-b1h {
  d: path("M6.75 15.5q1.5 1.2 3 0c1.5-1.2 2-.8 3 0s2 .8 3 0s2 .8 3 0");
}

.gc99geuhv {
  d: path("M3.75 12h16.5a.75.75 0 0 1 .75.85a9 7.5 0 0 1-18 0a.75.75 0 0 1 .75-.85m.75-9L8 12m0-9.25L10.25 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gc99geuhv"/><path class="cfhrd-b1h"/></g>`,
		"fallback": "iconoven:ramen-bowl",
	});
}

export default Component;
