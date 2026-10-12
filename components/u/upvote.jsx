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
		"content": `<style>.fzfa9xrtu {
  d: path("M9.75 15.5L12 13.25l2.25 2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z_-i5x3fo {
  d: path("m13.05 3.83l6.9 7.09Q21 12 19.5 12h-2Q16 12 16 13.5v6.25q0 1.5-1.5 1.5h-5q-1.5 0-1.5-1.5V13.5Q8 12 6.5 12h-2q-1.5 0-.45-1.08l6.9-7.09q1.05-1.08 2.1 0");
}
</style><g class="hntgybcog"><path class="z_-i5x3fo"/><path class="fzfa9xrtu"/></g>`,
		"fallback": "iconoven:upvote",
	});
}

export default Component;
