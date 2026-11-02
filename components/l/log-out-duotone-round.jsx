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
		"content": `<style>.cnwm5tbgj {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 17a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h3a4 4 0 0 1 4 4m4 8l3-3m0 0l-3-3m3 3H11");
}

.ft5dv1b6b {
  fill: none;
}

.imykr0b-k {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 7a4 4 0 0 1 4-4h3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z");
}
</style><g class="ft5dv1b6b"><path class="imykr0b-k"/><path class="cnwm5tbgj"/></g>`,
		"fallback": "coolicons:log-out-duotone-round",
	});
}

export default Component;
