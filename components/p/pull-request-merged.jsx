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

.irb0kkhdy {
  d: path("M6 6.5c0 3.5 6 3 6 6.5m6-6.5c0 3.5-6 3-6 6.5m0 0v4.5m-2 2a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.o6yrvmboa {
  d: path("M4 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="o6yrvmboa"/><path class="irb0kkhdy"/></g>`,
		"fallback": "uix:pull-request-merged",
	});
}

export default Component;
