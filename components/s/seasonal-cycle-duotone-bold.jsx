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
		"content": `<style>.h06k0cc0f {
  d: path("M3 12a4 4 0 0 1 8 0");
}

.o7dq6ibao {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 12a4 4 0 0 1 8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oh3qc3kah {
  d: path("M19 12a4 4 0 0 1 -8 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vnkxuib9d {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M19 12a4 4 0 0 1 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="o7dq6ibao"/><path class="vnkxuib9d"/><path class="h06k0cc0f"/><path class="oh3qc3kah"/></g>`,
		"fallback": "iconmind:seasonal-cycle-duotone-bold",
	});
}

export default Component;
