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
		"content": `<style>.e06a2yh0n {
  d: path("M11 12a4 4 0 0 1 8 0");
}

.h06k0cc0f {
  d: path("M3 12a4 4 0 0 1 8 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ys-dg812g {
  d: path("M3 16h18");
}
</style><g class="s0phu2bbs"><path class="h06k0cc0f"/><path class="e06a2yh0n"/><path class="ys-dg812g"/></g>`,
		"fallback": "iconmind:seasonality-outline-bold",
	});
}

export default Component;
