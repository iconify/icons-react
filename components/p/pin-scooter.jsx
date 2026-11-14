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
		"content": `<style>.ck6lwowvk {
  d: path("M12 21.5C9 19 3.5 15 3.5 11a8.5 8.5 0 0 1 17 0c0 4-5.5 8-8.5 10.5");
}

.fdnhv03xq {
  d: path("M8.75 12.75h6.5L14 7.25m-1.5 0h2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k1vunebnn {
  d: path("M7.5 14a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m6.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><g class="hntgybcog"><path class="ck6lwowvk"/><path class="fdnhv03xq"/><path class="k1vunebnn"/></g>`,
		"fallback": "uix:pin-scooter",
	});
}

export default Component;
