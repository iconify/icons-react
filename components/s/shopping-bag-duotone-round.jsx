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

.g6p7rubud {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 6h6a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-7a4 4 0 0 1 4-4");
}

.qvg1frb6n {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 10a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4Zm4-4a3 3 0 0 1 6 0");
}
</style><g class="ft5dv1b6b"><path class="g6p7rubud"/><path class="qvg1frb6n"/></g>`,
		"fallback": "coolicons:shopping-bag-duotone-round",
	});
}

export default Component;
