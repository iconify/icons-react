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
		"content": `<style>.dxilmz-8r {
  d: path("M12 3.5a8.5 8.5 0 1 1-6.01 2.49");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t_h8eob5j {
  d: path("M2.75 6H6v3.25M10.75 7h2.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1a1 1 0 0 1 1-1m0 2h2.5A1.75 1.75 0 0 1 15 10.75v4a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 9 14.75v-4A1.75 1.75 0 0 1 10.75 9");
}
</style><g class="hntgybcog"><path class="dxilmz-8r"/><path class="t_h8eob5j"/></g>`,
		"fallback": "uix:rx-auto-refill",
	});
}

export default Component;
