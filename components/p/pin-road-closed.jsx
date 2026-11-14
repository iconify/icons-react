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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lo6m7fbqe {
  d: path("M7.5 11a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m2.25 0h4.5");
}
</style><g class="hntgybcog"><path class="ck6lwowvk"/><path class="lo6m7fbqe"/></g>`,
		"fallback": "uix:pin-road-closed",
	});
}

export default Component;
