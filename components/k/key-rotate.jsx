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

.nbduvob_h {
  d: path("M3 16.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m6 0h12m-2.5 0V19m-3-2.5v2M4.614 10.198a7.5 7.5 0 0 1 14.772 0");
}

.yvhx9r25z {
  d: path("m21 8l-1.5 2.25L17 8.5");
}
</style><g class="hntgybcog"><path class="nbduvob_h"/><path class="yvhx9r25z"/></g>`,
		"fallback": "uix:key-rotate",
	});
}

export default Component;
