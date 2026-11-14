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
		"content": `<style>.cci54lb3t {
  d: path("M6 15a6 6 0 1 0 12 0a6 6 0 1 0-12 0M7.5 2.5l2.75 6.75M16.5 2.5l-2.75 6.75");
}

.dmefz13ah {
  d: path("M10 12.5h4l-2 2.25c1.25 0 2 .75 2 1.75s-.9 1.75-2 1.75c-1 0-1.75-.4-2-1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cci54lb3t"/><path class="dmefz13ah"/></g>`,
		"fallback": "uix:medal-bronze",
	});
}

export default Component;
