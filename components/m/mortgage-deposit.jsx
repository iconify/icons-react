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

.sw0jknbxc {
  d: path("M9.5 9.5h-1l-5 4.5v6.5a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V14l-5-4.5h-1m-4.5 0a2 2 0 0 1 4 0m-2-7v3m-1.5-1.25l1.5 1.5l1.5-1.5");
}

.vy-2v5bwr {
  d: path("M13.25 14.75c0-.5-.5-.75-1.25-.75s-1.25.5-1.25 1c0 1.25 2.5.75 2.5 2.5c0 .5-.5 1-1.25 1s-1.25-.5-1.25-.75m1.25-4.5V14m0 4.5v.75");
}
</style><g class="hntgybcog"><path class="sw0jknbxc"/><path class="vy-2v5bwr"/></g>`,
		"fallback": "uix:mortgage-deposit",
	});
}

export default Component;
