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

.j-1cambby {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z");
}

.kho1xdx0c {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm11-2v16");
}
</style><g class="ft5dv1b6b"><path class="j-1cambby"/><path class="kho1xdx0c"/></g>`,
		"fallback": "coolicons:panel-right-duotone",
	});
}

export default Component;
