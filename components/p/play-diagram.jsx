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
		"content": `<style>.e6f7l-b6c {
  d: path("M3 17a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M15.5 3.5l5 5m0-5l-5 5m-9 2.25c0-3 2-4.25 6-4.25");
}

.gss9qvb8e {
  d: path("m10.5 4.5l2 2l-2 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="e6f7l-b6c"/><path class="gss9qvb8e"/></g>`,
		"fallback": "uix:play-diagram",
	});
}

export default Component;
