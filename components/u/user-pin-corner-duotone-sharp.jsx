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

.jr7ek93el {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 11a4 4 0 1 1 0-8a4 4 0 0 1 0 8m6 2h4v3l2 2h-8l2-2Zm-6 2v6H3a6 6 0 0 1 6-6");
}

.q05h0944m {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M3 21a6 6 0 0 1 6-6m6-2h4v3l2 2h-8l2-2zm-1 0h6m-3 5v3");
}
</style><g class="ft5dv1b6b"><path class="jr7ek93el"/><path class="q05h0944m"/></g>`,
		"fallback": "coolicons:user-pin-corner-duotone-sharp",
	});
}

export default Component;
