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

.qgw9nm9bj {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 6h6v4a3 3 0 0 1-6 0zm1 0V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2M3 21h18M6 17h8m0 4a6 6 0 0 0 6-6a5 5 0 0 0-5-5h-2");
}

.wtkey7b_q {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 5V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1 1 1v4a4 4 0 0 1-8 0V6a1 1 0 0 1 1-1");
}
</style><g class="ft5dv1b6b"><path class="wtkey7b_q"/><path class="qgw9nm9bj"/></g>`,
		"fallback": "coolicons:microscope-duotone-round",
	});
}

export default Component;
