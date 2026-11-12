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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vo6pq_eni {
  d: path("M21 6H13M21 10H13M21 14H13M21 18H13");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.wo8rm3bwm {
  stroke-linejoin: round;
  d: path("M5.28516 18L6.99944 16L5.28516 14M5.28516 10L6.99944 8L5.28516 6");
}
</style><g class="ipq1z-bjh"><path class="vo6pq_eni"/><path class="wo8rm3bwm"/></g>`,
		"fallback": "solar:list-collapse-line-duotone",
	});
}

export default Component;
