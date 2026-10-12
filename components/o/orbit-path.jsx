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

.lqmqmxptf {
  d: path("M19.58 9.13a9.25 5 0 1 1-6.77-2.11");
}

.nvay6mg0g {
  cx: 16.63px;
  cy: 7.67px;
  r: 2px;
}

.rzyzgqcqn {
  cx: 12px;
  cy: 12px;
  r: 2.25px;
}
</style><g class="hntgybcog"><circle class="rzyzgqcqn"/><path class="lqmqmxptf"/><circle class="nvay6mg0g"/></g>`,
		"fallback": "iconoven:orbit-path",
	});
}

export default Component;
