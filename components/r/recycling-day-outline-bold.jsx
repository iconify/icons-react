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
		"content": `<style>.gashr7bir {
  d: path("m8 13 3 -3 3 3");
}

.jsqnf3b1y {
  d: path("m8 17 3 3 3 -3");
}

.pwvj2zbau {
  d: path("M5 8V5h12v3");
}

.rh6cspb3h {
  d: path("M6 8v13h10V8Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="rh6cspb3h"/><path class="pwvj2zbau"/><path class="gashr7bir"/><path class="jsqnf3b1y"/></g>`,
		"fallback": "iconmind:recycling-day-outline-bold",
	});
}

export default Component;
