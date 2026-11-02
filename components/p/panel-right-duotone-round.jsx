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
		"content": `<style>.f9znvjmlg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 21h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z");
}

.ft5dv1b6b {
  fill: none;
}

.w65jbxezz {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm11-4v16");
}
</style><g class="ft5dv1b6b"><path class="f9znvjmlg"/><path class="w65jbxezz"/></g>`,
		"fallback": "coolicons:panel-right-duotone-round",
	});
}

export default Component;
