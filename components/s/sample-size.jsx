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

.qandoubwr {
  d: path("M9 11.75a3 3 0 0 1 6 0v4.75m-7.25 0h2.5");
}

.unfl7st5e {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M9 8.75v7.75");
}
</style><g class="hntgybcog"><path class="unfl7st5e"/><path class="qandoubwr"/></g>`,
		"fallback": "uix:sample-size",
	});
}

export default Component;
