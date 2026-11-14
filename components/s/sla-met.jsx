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
		"content": `<style>.cl9t4obqz {
  d: path("m8 11.5l3.5 3.5l9-9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rlqg5xb4a {
  d: path("M16.75 3.75a9.5 9.5 0 1 0 4.5 5.75");
}
</style><g class="hntgybcog"><path class="rlqg5xb4a"/><path class="cl9t4obqz"/></g>`,
		"fallback": "uix:sla-met",
	});
}

export default Component;
