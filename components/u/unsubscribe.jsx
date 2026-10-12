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
		"content": `<style>.alxgduowb {
  d: path("M11 4.25a6 6 0 0 0-6 6v2.85c0 .7-.25 1.4-.7 1.95l-.6.75c-.6.75-.1 1.95.9 1.95h12.8c1 0 1.5-1.2.9-1.95l-.6-.75c-.45-.55-.7-1.25-.7-1.95v-1.6m-8.25 8.75Q9.575 21 11 21c1.425 0 1.7-.25 2.25-.75");
}

.g_vya492f {
  d: path("M16 6.25h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w1y-8_bhe {
  cx: 17.5px;
  cy: 6.25px;
  r: 3.5px;
}
</style><g class="hntgybcog"><path class="alxgduowb"/><circle class="w1y-8_bhe"/><path class="g_vya492f"/></g>`,
		"fallback": "iconoven:unsubscribe",
	});
}

export default Component;
