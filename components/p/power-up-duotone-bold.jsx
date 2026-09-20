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
		"content": `<style>.e0b1xgbse {
  d: path("m16 3 -8 8h5l-9 9");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.z0xegyskx {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m16 3 -8 8h5l-9 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="z0xegyskx"/><path class="e0b1xgbse"/></g>`,
		"fallback": "iconmind:power-up-duotone-bold",
	});
}

export default Component;
