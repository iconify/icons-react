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

.n6_6vnb_g {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 4h10a3 3 0 1 1 0 6H7a3 3 0 1 1 0-6");
}

.rv8h4xbin {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 0 6H7a3 3 0 0 1-3-3m5 10h6m-3-3v6");
}
</style><g class="ft5dv1b6b"><path class="n6_6vnb_g"/><path class="rv8h4xbin"/></g>`,
		"fallback": "coolicons:row-plus-duotone-round",
	});
}

export default Component;
