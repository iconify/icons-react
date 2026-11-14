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

.qum3ui5xk {
  d: path("M4.5 4c0 9 3.5 13 7.5 13s7.5-4 7.5-13");
}

.yczwjqb8p {
  d: path("M4.25 11a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m3 4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m7 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m3-4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M12 17c1.5 1.5 2 2.25 2 3a2 2 0 0 1-4 0c0-.75.5-1.5 2-3");
}
</style><g class="hntgybcog"><path class="qum3ui5xk"/><path class="yczwjqb8p"/></g>`,
		"fallback": "uix:necklace-beads-ancient",
	});
}

export default Component;
