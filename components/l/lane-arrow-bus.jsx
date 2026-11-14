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
		"content": `<style>.e7zygnb-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 21V3.25m-2 2l2-2l2 2M13.625 3h3.75A2.625 2.625 0 0 1 20 5.625v10.25a2.625 2.625 0 0 1-2.625 2.625h-3.75A2.625 2.625 0 0 1 11 15.875V5.625A2.625 2.625 0 0 1 13.625 3M11 10.5h9m-6.75 4h.01m4.49 0h.01M11 5L9.5 6.5M20 5l1.5 1.5m-8.5 12V21m5-2.5V21");
}
</style><path class="e7zygnb-e"/>`,
		"fallback": "uix:lane-arrow-bus",
	});
}

export default Component;
