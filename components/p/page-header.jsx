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

.q9g_46b7e {
  d: path("M3.75 9.75v9.5a2 2 0 0 0 2 2h12.5a2 2 0 0 0 2-2v-9.5M7.5 13.5h9m-9 3.5h6");
}

.wuln3c1ei {
  width: 16.5px;
  height: 4.75px;
  x: 3.75px;
  y: 2.75px;
  rx: 1.75px;
}
</style><g class="hntgybcog"><rect class="wuln3c1ei"/><path class="q9g_46b7e"/></g>`,
		"fallback": "iconoven:page-header",
	});
}

export default Component;
