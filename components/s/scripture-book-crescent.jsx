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

.hr47y2usv {
  d: path("M4.5 19A2.5 2.5 0 0 1 7 16.5h12.5M14.5 6a4 4 0 1 0 1.75 5a3.25 3.25 0 0 1-1.75-5");
}

.n13x6dbmu {
  d: path("M4.5 19V5A2.5 2.5 0 0 1 7 2.5h12.5v19H7A2.5 2.5 0 0 1 4.5 19");
}
</style><g class="hntgybcog"><path class="n13x6dbmu"/><path class="hr47y2usv"/></g>`,
		"fallback": "uix:scripture-book-crescent",
	});
}

export default Component;
