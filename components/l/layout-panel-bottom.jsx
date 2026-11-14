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

.mu_x_cdbq {
  d: path("M7.25 13.5h9.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 16.75 17h-9.5a1.75 1.75 0 0 1-1.75-1.75a1.75 1.75 0 0 1 1.75-1.75");
}

.zuy18rxxe {
  d: path("M7.75 4h8.5a5.25 5.25 0 0 1 5.25 5.25v5.5A5.25 5.25 0 0 1 16.25 20h-8.5a5.25 5.25 0 0 1-5.25-5.25v-5.5A5.25 5.25 0 0 1 7.75 4");
}
</style><g class="hntgybcog"><path class="zuy18rxxe"/><path class="mu_x_cdbq"/></g>`,
		"fallback": "uix:layout-panel-bottom",
	});
}

export default Component;
