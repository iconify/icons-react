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
		"content": `<style>.db2gipbug {
  d: path("M10.75 13.5L8.25 16l2.5 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rwqsdd7rp {
  d: path("M3.25 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0h9.5a4 4 0 0 1 0 8h-8.5");
}
</style><g class="hntgybcog"><path class="rwqsdd7rp"/><path class="db2gipbug"/></g>`,
		"fallback": "uix:out-and-back-trail",
	});
}

export default Component;
