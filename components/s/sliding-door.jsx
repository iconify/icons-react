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

.w1ghlpbud {
  width: 16.5px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2px;
}

.zqmhoxb5y {
  d: path("M12 2.75v18.5M9.25 10.5v3M14.5 12H18m-1.5-1.5L18 12l-1.5 1.5");
}
</style><g class="hntgybcog"><rect class="w1ghlpbud"/><path class="zqmhoxb5y"/></g>`,
		"fallback": "iconoven:sliding-door",
	});
}

export default Component;
