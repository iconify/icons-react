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
		"content": `<style>.e2pz90ala {
  d: path("M11.5 12.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M6.75 14.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M10 10.75a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0M9.75 17a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m9-7.5c1.75-2.5.75-5.5-2-5.75c-1.5 0-2.5 1-2.25 2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.njcm-8cze {
  d: path("M2.5 13.25a8.5 5.25 0 1 0 17 0a8.5 5.25 0 1 0-17 0");
}
</style><g class="hntgybcog"><path class="njcm-8cze"/><path class="e2pz90ala"/></g>`,
		"fallback": "uix:ovary",
	});
}

export default Component;
