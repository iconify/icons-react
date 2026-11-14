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

.i_vdzcccy {
  d: path("M17 7.25a3 3 0 0 0-3-3h-3.5m2-2l-2 2l2 2m2.25 13.875l.166-.914a1.5 1.5 0 0 1 .415-.792l3.358-3.358a1.5 1.5 0 0 1 2.122 0l.128.128a1.5 1.5 0 0 1 0 2.122l-3.358 3.358a1.5 1.5 0 0 1-.792.415l-.914.166a.968.968 0 0 1-1.125-1.125");
}

.q1_c60bhe {
  d: path("M3.25 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m0 14a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M5.5 7.25v9.5m9.25-7.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="q1_c60bhe"/><path class="i_vdzcccy"/></g>`,
		"fallback": "uix:pull-request-changes",
	});
}

export default Component;
