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

.srm1mr0rf {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 8v10a2 2 0 0 0 2 2h2M4 8l1-2c.613-1.226 1.387-2 2-2h10c.613 0 1.387.774 2 2l1 2M4 8h16m-3 8h.01M17 21c-2-2-4-4-4-5a4 4 0 1 1 8 0c0 1-2 3-4 5");
}

.u246pccjq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m4 8l1-2c.326-.651 1.15-1.999 2-2h10c.85.001 1.674 1.349 2 2l1 2Zm13 13c-2-2-4-4-4-5a4 4 0 0 1 8 0c0 1-2 3-4 5");
}
</style><g class="ft5dv1b6b"><path class="u246pccjq"/><path class="srm1mr0rf"/></g>`,
		"fallback": "coolicons:package-tracking-corner-duotone",
	});
}

export default Component;
