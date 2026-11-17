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

.ie299ccst {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 3h10v18H7Z");
}

.ls_my1bjr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 3h10v18H7ZM3 6l1 3l-1 3l1 3l-1 3M21 6l-1 3l1 3l-1 3l1 3");
}
</style><g class="ft5dv1b6b"><path class="ie299ccst"/><path class="ls_my1bjr"/></g>`,
		"fallback": "coolicons:mobile-vibrate-duotone-sharp",
	});
}

export default Component;
