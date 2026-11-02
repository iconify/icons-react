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

.lh8bb6b_h {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 6h7l3 3l-3 3H4V6Z");
}

.m8-upz77v {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 6h7l3 3l-3 3H4V6zm2-3v3m0 6v9");
}
</style><g class="ft5dv1b6b"><path class="lh8bb6b_h"/><path class="m8-upz77v"/></g>`,
		"fallback": "coolicons:signpost-duotone-sharp",
	});
}

export default Component;
