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
		"content": `<style>.e27v3o1ge {
  d: path("m8.25 10.25l3.5-6.5a2 2 0 0 1 3 2.2l-.9 3.55h4.65a2.25 2.25 0 0 1 2.2 2.7l-1.4 6.5a2.25 2.25 0 0 1-2.2 1.8H8.25Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lrm6u5blj {
  width: 3px;
  height: 10.25px;
  x: 2.75px;
  y: 10.25px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><path class="e27v3o1ge"/><rect class="lrm6u5blj"/></g>`,
		"fallback": "iconoven:thumbs-up",
	});
}

export default Component;
