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
		"content": `<style>.cri2kux5k {
  d: path("M7.75 2.5h8.5A1.75 1.75 0 0 1 18 4.25v15.5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 6 19.75V4.25A1.75 1.75 0 0 1 7.75 2.5");
}

.dw78q1bpw {
  d: path("M10.25 5.5h3.5A1.25 1.25 0 0 1 15 6.75A1.25 1.25 0 0 1 13.75 8h-3.5A1.25 1.25 0 0 1 9 6.75a1.25 1.25 0 0 1 1.25-1.25M15 13h.01M3 21.5h18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cri2kux5k"/><path class="dw78q1bpw"/></g>`,
		"fallback": "uix:private-office",
	});
}

export default Component;
