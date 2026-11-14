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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u7bo_8-4q {
  d: path("M16.75 8.75L19 11l2.25-2.25M8 11a3 3 0 1 0 6 0a3 3 0 1 0-6 0m6.75 7a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}

.wqi57sfeu {
  d: path("M5.25 16.75A8 8 0 1 1 19 11");
}
</style><g class="hntgybcog"><path class="wqi57sfeu"/><path class="u7bo_8-4q"/><path class="a6k62accz"/></g>`,
		"fallback": "uix:routine-schedule",
	});
}

export default Component;
