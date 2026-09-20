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
		"content": `<style>.mcubrkb2y {
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.znp96bc9s {
  d: path("m15 12 -3 3h2.5l-3 3");
}
</style><g class="s0phu2bbs"><path class="mcubrkb2y"/><path class="znp96bc9s"/></g>`,
		"fallback": "iconmind:swift-transfer-outline-bold",
	});
}

export default Component;
