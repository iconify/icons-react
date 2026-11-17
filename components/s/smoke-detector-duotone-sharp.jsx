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

.j-q2uk_mg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 3h18v4h-4v4H7V7H3Z");
}

.l4n_476vs {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h18v4H3Zm4 4v4h10V7m-8 8c1.5.75 1.5 2.25 0 3s-1.5 2.25 0 3m6-6c1.5.75 1.5 2.25 0 3s-1.5 2.25 0 3");
}
</style><g class="ft5dv1b6b"><path class="j-q2uk_mg"/><path class="l4n_476vs"/></g>`,
		"fallback": "coolicons:smoke-detector-duotone-sharp",
	});
}

export default Component;
