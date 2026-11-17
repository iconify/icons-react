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

.k-a_8ebhq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 17V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a4 4 0 1 1-8 0m4 0h.01M11 9l3-3a1.414 1.414 0 0 1 2 0l3 3a1.414 1.414 0 0 1 0 2L9 21m7-7h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H7");
}

.kuy3ptbdx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a4 4 0 0 1-8 0Z");
}
</style><g class="ft5dv1b6b"><path class="kuy3ptbdx"/><path class="k-a_8ebhq"/></g>`,
		"fallback": "coolicons:swatches-duotone",
	});
}

export default Component;
