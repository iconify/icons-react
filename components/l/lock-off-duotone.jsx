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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.jit_-dybp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 21H6a2.003 2.003 0 0 1-2-2v-7a2.003 2.003 0 0 1 2-2h1Zm-5-11h5a2.003 2.003 0 0 1 2 2v5Z");
}

.kjutkzuud {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1m6 0h5a2 2 0 0 1 2 2v5M9 6a3 3 0 0 1 6 0v4M2 5l17 17");
}
</style><g class="ft5dv1b6b"><path class="jit_-dybp"/><path class="kjutkzuud"/></g>`,
		"fallback": "coolicons:lock-off-duotone",
	});
}

export default Component;
