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
		"content": `<style>.e9ijo3e6m {
  d: path("M8.5 8.5h3c1 0 1.5.5 1.75 1.5l.25 1c2.5.75 4 2.5 3.75 4.5c-.25 1.75-1.75 2.75-3.75 2.5l-.25 3.5H8V17c-.75-1.5-1.25-4-1-6c.25-1.5.75-2.5 1.5-2.5m-.25-3.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vi13l3bsd {
  fill: currentColor;
  d: path("M7.75 15.25C10.5 17 14 17.75 17 16.75l-.75 2c-2.75.75-5.75.5-8.5-1Z");
}
</style><g class="hntgybcog"><path class="e9ijo3e6m"/><path class="vi13l3bsd"/></g>`,
		"fallback": "uix:maternity-belt",
	});
}

export default Component;
