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
		"content": `<style>.dxya-bbug {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 2h8a4 4 0 0 1 0 8H6a4 4 0 0 1 0-8m9 15v2a3 3 0 1 1-6 0v-2a3 3 0 1 1 6 0");
}

.ft5dv1b6b {
  fill: none;
}

.u093efbxk {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 0 6H6a3 3 0 0 1-3-3m14 0h1a3 3 0 0 1 0 6h-3a3 3 0 0 0-3 3m-2 2a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0Z");
}
</style><g class="ft5dv1b6b"><path class="dxya-bbug"/><path class="u093efbxk"/></g>`,
		"fallback": "coolicons:paint-roller-duotone-round",
	});
}

export default Component;
