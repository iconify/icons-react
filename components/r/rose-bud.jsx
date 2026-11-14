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

.ma2xg8xza {
  d: path("M7.25 9.75C10 12 13.5 11 15 5.75m-3 9.75q-2.5.25-5 2.75m5-2.75q2.5.25 5 2.75m-5-2.75v6");
}

.zx0i7tbao {
  d: path("M12 2.5c3.5 3 5 6.5 5 9c0 2.75-2.25 4-5 4s-5-1.25-5-4c0-2.5 1.5-6 5-9");
}
</style><g class="hntgybcog"><path class="zx0i7tbao"/><path class="ma2xg8xza"/></g>`,
		"fallback": "uix:rose-bud",
	});
}

export default Component;
