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

.k2mootbun {
  d: path("M12 2.5v2m-6 5v-5h12v5");
}

.t0op3ybty {
  d: path("M10.75 7.25h2.5a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-2.5a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-1 4L5 18m9.25-6.75L19 18M4.5 19a7.5 2.5 0 1 0 15 0a7.5 2.5 0 1 0-15 0");
}
</style><g class="hntgybcog"><path class="k2mootbun"/><path class="t0op3ybty"/></g>`,
		"fallback": "uix:spotlight-cone",
	});
}

export default Component;
