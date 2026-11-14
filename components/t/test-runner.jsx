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

.ib-ky-bwj {
  d: path("M19.25 8.25A8.5 8.5 0 1 1 12 4");
}

.v7h8rpsds {
  d: path("m10 2l2 2l-2 2m4 2.5h.01m-1.26 2l-1.5 3.5l2.25 1.5l-.75 2m-1.5-3.5L9 15.5m.25-4.25l3.5-.75l2 2");
}
</style><g class="hntgybcog"><path class="ib-ky-bwj"/><path class="v7h8rpsds"/></g>`,
		"fallback": "uix:test-runner",
	});
}

export default Component;
