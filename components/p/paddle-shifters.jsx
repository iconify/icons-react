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

.j7q_v5npt {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-4.5 0H10m4 0h4.5M12 14v4.5");
}

.jwqznrd0y {
  d: path("M5.5 12a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0M2.75 9v6m18.5-6v6");
}
</style><g class="hntgybcog"><path class="jwqznrd0y"/><path class="j7q_v5npt"/></g>`,
		"fallback": "uix:paddle-shifters",
	});
}

export default Component;
