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
		"content": `<style>.ey7qyccbu {
  d: path("m8 11l4 1.5l5.5-4m-5.5 4l.75 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jwjajfi6y {
  d: path("m2.5 19.5l1.5-6L8 11l2-4l4.5-1.5l3 3l3 3.5l1 7.5Z");
}
</style><g class="hntgybcog"><path class="jwjajfi6y"/><path class="ey7qyccbu"/></g>`,
		"fallback": "uix:rock-pile",
	});
}

export default Component;
