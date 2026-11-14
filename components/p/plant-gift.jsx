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
		"content": `<style>.a4asa46dr {
  d: path("M6.25 11.5h11.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 17.75 15H6.25a1.75 1.75 0 0 1-1.75-1.75a1.75 1.75 0 0 1 1.75-1.75M8.625 15h6.75A2.625 2.625 0 0 1 18 17.625v1.25a2.625 2.625 0 0 1-2.625 2.625h-6.75A2.625 2.625 0 0 1 6 18.875v-1.25A2.625 2.625 0 0 1 8.625 15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t7atmibti {
  d: path("M12 21.5V8c-.25-3-2.25-5-5.25-5C6.75 6 9 8 12 8c.25-3.25 2.25-5.5 5.25-5.5c0 3-2 5.5-5.25 5.5");
}
</style><g class="hntgybcog"><path class="a4asa46dr"/><path class="t7atmibti"/></g>`,
		"fallback": "uix:plant-gift",
	});
}

export default Component;
