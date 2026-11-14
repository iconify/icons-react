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
		"content": `<style>.hn0nwvbgg {
  d: path("M12.5 4.5c0-2 3-2.5 4.75-1C19.5 5.5 18 9 20 11l1.5 1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zu1650b1x {
  d: path("M7.5 7.5h4A3.5 3.5 0 0 1 15 11v7a3.5 3.5 0 0 1-3.5 3.5h-4A3.5 3.5 0 0 1 4 18v-7a3.5 3.5 0 0 1 3.5-3.5m-3-3h10A1.5 1.5 0 0 1 16 6a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 3 6a1.5 1.5 0 0 1 1.5-1.5m-.5 10h11");
}
</style><g class="hntgybcog"><path class="zu1650b1x"/><path class="hn0nwvbgg"/></g>`,
		"fallback": "uix:suction-device",
	});
}

export default Component;
