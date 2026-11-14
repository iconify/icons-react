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

.sa60rk6_y {
  d: path("M4 20.5L8 7.25h8l4 13.25M12 7.25V20.5M6 14h12M2.5 20.5h19");
}

.wf19-ebxl {
  d: path("M6 5a2.25 2.25 0 1 0 4.5 0A2.25 2.25 0 1 0 6 5m7.5 0A2.25 2.25 0 1 0 18 5a2.25 2.25 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="wf19-ebxl"/><path class="sa60rk6_y"/></g>`,
		"fallback": "uix:mine-headframe",
	});
}

export default Component;
