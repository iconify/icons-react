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

.krvhrg2-b {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4h16v16H4Zm11 0v16");
}

.o-n0qnazd {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15 4h5v16h-5Z");
}
</style><g class="ft5dv1b6b"><path class="o-n0qnazd"/><path class="krvhrg2-b"/></g>`,
		"fallback": "coolicons:panel-right-duotone-sharp",
	});
}

export default Component;
