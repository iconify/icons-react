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
		"content": `<style>.fps3alwnn {
  d: path("M9.5 13.5v-1.25a2.5 2.5 0 0 1 2.5-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tz5m8sbsk {
  d: path("M6.5 17.5v-5a5.5 5.5 0 0 1 11 0v5m-11.75 0h12.5A1.75 1.75 0 0 1 20 19.25A1.75 1.75 0 0 1 18.25 21H5.75A1.75 1.75 0 0 1 4 19.25a1.75 1.75 0 0 1 1.75-1.75M12 2.5V4M4 5l1.25 1.25M20 5l-1.25 1.25");
}
</style><g class="hntgybcog"><path class="tz5m8sbsk"/><path class="fps3alwnn"/></g>`,
		"fallback": "uix:red-alert",
	});
}

export default Component;
