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

.lahzcwbaf {
  d: path("M4.75 8h14.5A1.75 1.75 0 0 1 21 9.75v10a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 19.75v-10A1.75 1.75 0 0 1 4.75 8");
}

.lxgxw9bzn {
  fill: currentColor;
  d: path("M8.75 2.5h6.5A1.75 1.75 0 0 1 17 4.25A1.75 1.75 0 0 1 15.25 6h-6.5A1.75 1.75 0 0 1 7 4.25A1.75 1.75 0 0 1 8.75 2.5");
}

.yzif0vl1v {
  d: path("M12 8v13.5M5.5 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0m9 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="lahzcwbaf"/><path class="lxgxw9bzn"/><path class="yzif0vl1v"/></g>`,
		"fallback": "uix:operating-theatre",
	});
}

export default Component;
