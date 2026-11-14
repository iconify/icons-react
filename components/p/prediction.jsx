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
		"content": `<style>.czu33icqx {
  d: path("M4.5 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t25hwsbel {
  d: path("M7.5 16L6 21.5h12L16.5 16M7.653 8.835a4.5 4.5 0 0 1 3.182-3.182");
}
</style><g class="hntgybcog"><path class="czu33icqx"/><path class="t25hwsbel"/></g>`,
		"fallback": "uix:prediction",
	});
}

export default Component;
