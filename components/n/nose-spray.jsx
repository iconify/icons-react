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
		"content": `<style>.h-o-vybtb {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 4.75h.01m2.74-1.5h.01M18 6.5h.01m2.74-1.75h.01");
}

.qgmm8d84x {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 21.25a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2H7V10.5a1 1 0 0 1 1-1h.25l2.58-6a.75.75 0 0 1 1.45.39l-.53 5.61H12a1 1 0 0 1 1 1v1.75h.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2Z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="qgmm8d84x"/><path class="h-o-vybtb"/></g>`,
		"fallback": "iconoven:nose-spray",
	});
}

export default Component;
