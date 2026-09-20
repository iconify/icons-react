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
		"content": `<style>.ru4yg4kdx {
  d: path("M4 20c0 -9.6 6.4 -16 16 -16 0 9.6 -6.4 16 -16 16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.z50cotl-z {
  d: path("m13 8 -3.5 3.5h3L9 15");
}
</style><g class="s0phu2bbs"><path class="ru4yg4kdx"/><path class="z50cotl-z"/></g>`,
		"fallback": "iconmind:renewable-energy-outline-bold",
	});
}

export default Component;
