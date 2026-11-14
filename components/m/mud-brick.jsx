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

.s52uzybxk {
  d: path("M2.5 11L6 7.5h15.5V14L18 17.5H2.5Z");
}

.tag7x2b-n {
  d: path("M2.5 11H18v6.5m0-6.5l3.5-3.5M6 14.25h3.5");
}
</style><g class="hntgybcog"><path class="s52uzybxk"/><path class="tag7x2b-n"/></g>`,
		"fallback": "uix:mud-brick",
	});
}

export default Component;
