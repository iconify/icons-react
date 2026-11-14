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
		"content": `<style>.goiz_9b_e {
  d: path("M6.551 19.782a9.5 9.5 0 1 1 10.898 0M12 2.5v2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zc8gkes1s {
  d: path("M8.5 15.5c0-5 2.5-7.25 7.25-7.25c0 4.75-2.25 7.25-7.25 7.25m0 0l-1 1");
}
</style><g class="hntgybcog"><path class="goiz_9b_e"/><path class="zc8gkes1s"/></g>`,
		"fallback": "uix:thermostat-eco",
	});
}

export default Component;
