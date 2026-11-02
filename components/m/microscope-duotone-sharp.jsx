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
		"content": `<style>.czbef8bul {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 2a1 1 0 0 1 1 1v2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1V3a1 1 0 0 1 1-1Z");
}

.ft5dv1b6b {
  fill: none;
}

.ydajjgzjr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 6h6v7H7zm1 0V3h4v3M3 21h18M6 17h8m0 4a6 6 0 0 0 6-6a5 5 0 0 0-5-5h-2");
}
</style><g class="ft5dv1b6b"><path class="czbef8bul"/><path class="ydajjgzjr"/></g>`,
		"fallback": "coolicons:microscope-duotone-sharp",
	});
}

export default Component;
