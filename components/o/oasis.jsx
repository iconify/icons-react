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

.ov7mh3bhu {
  d: path("M2.75 18.75a9.25 2.5 0 1 0 18.5 0a9.25 2.5 0 1 0-18.5 0m5.25 0h8");
}

.qw7s0_5-o {
  d: path("M10.5 9.5c-2-2.5-5-3-7.25-1.75M10.5 9.5c-.5-3 1-5.5 4-6.25m-4 6.25c2-1.75 5-1.75 7.75 0m-7.75 0c-3-.25-5.5 1.5-6 4m6-4c1 2.5 1.5 5 1.25 7.5");
}
</style><g class="hntgybcog"><path class="qw7s0_5-o"/><path class="ov7mh3bhu"/></g>`,
		"fallback": "iconoven:oasis",
	});
}

export default Component;
