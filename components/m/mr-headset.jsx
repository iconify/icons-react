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
		"content": `<style>.a1czn0bwe {
  d: path("M8.75 5.25h6.5a5.25 5.25 0 0 1 5.25 5.25a5.25 5.25 0 0 1-5.25 5.25h-6.5A5.25 5.25 0 0 1 3.5 10.5a5.25 5.25 0 0 1 5.25-5.25");
}

.bmnfwh2kd {
  d: path("M7 9.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m7 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M2 16.25a10 2.5 0 1 0 20 0a10 2.5 0 1 0-20 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="a1czn0bwe"/><path class="bmnfwh2kd"/></g>`,
		"fallback": "uix:mr-headset",
	});
}

export default Component;
