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

.xvrt78hka {
  d: path("M3.5 16.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m5.5 0V3m0 0c1.5 3 5.5 3.5 5.5 7.5m-.75 7.25a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}

.yh8y5j3yq {
  d: path("M18.75 16.5a1.75 1.75 0 1 0 0 2.5");
}
</style><g class="hntgybcog"><path class="xvrt78hka"/><path class="yh8y5j3yq"/></g>`,
		"fallback": "uix:music-rights",
	});
}

export default Component;
