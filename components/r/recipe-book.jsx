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

.nlv6wlbvt {
  d: path("M6.75 2.75v18.5m3-14v2.5a2 2 0 0 0 4 0v-2.5m-2 4.5V17m5-9.75V17");
}

.w1ghlpbud {
  width: 16.5px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="w1ghlpbud"/><path class="nlv6wlbvt"/></g>`,
		"fallback": "iconoven:recipe-book",
	});
}

export default Component;
