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
		"content": `<style>.c096n9bvu {
  d: path("m7 6l4 3l4-3m-8 6.5h8m-8 4h4");
}

.ca_hx0s4f {
  d: path("M7 2.5h8A3.5 3.5 0 0 1 18.5 6v12a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 18V6A3.5 3.5 0 0 1 7 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ca_hx0s4f"/><path class="c096n9bvu"/></g>`,
		"fallback": "uix:newsletter-issue",
	});
}

export default Component;
