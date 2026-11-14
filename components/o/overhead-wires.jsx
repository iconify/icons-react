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
		"content": `<style>.gb_t61b5t {
  d: path("M4 3v18.5M20 3v18.5M4 6q8 5 16 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nzite7bsv {
  d: path("M4 10q8 5 16 0");
}
</style><g class="hntgybcog"><path class="gb_t61b5t"/><path class="nzite7bsv"/></g>`,
		"fallback": "uix:overhead-wires",
	});
}

export default Component;
