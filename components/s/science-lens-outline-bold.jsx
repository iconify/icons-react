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
		"content": `<style>.r7xk8o29f {
  d: path("M12 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.up7vunb7t {
  d: path("M4 12c4 -8 12 -8 16 0 -4 8 -12 8 -16 0");
}
</style><g class="s0phu2bbs"><path class="up7vunb7t"/><path class="r7xk8o29f"/></g>`,
		"fallback": "iconmind:science-lens-outline-bold",
	});
}

export default Component;
