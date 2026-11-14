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
		"content": `<style>.ggo9l_7_u {
  d: path("M3 7.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jeffvdsrc {
  d: path("M8.5 13za1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 7 20v-5.5A1.5 1.5 0 0 1 8.5 13m-5 8.5h10m3-4a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-3-7.5l3 2l-1.5 1.25L18 15");
}
</style><g class="hntgybcog"><path class="ggo9l_7_u"/><path class="jeffvdsrc"/></g>`,
		"fallback": "uix:van-de-graaff",
	});
}

export default Component;
