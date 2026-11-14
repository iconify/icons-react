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

.lq-t_kbrm {
  d: path("M3.5 13a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0");
}

.y3hr-yglf {
  d: path("M7 13a5 5 0 1 0 10 0a5 5 0 1 0-10 0m5-8.5h9.5");
}
</style><g class="hntgybcog"><path class="lq-t_kbrm"/><path class="y3hr-yglf"/></g>`,
		"fallback": "uix:particle-accelerator",
	});
}

export default Component;
