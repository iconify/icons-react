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
		"content": `<style>.daa2uvb1b {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 4h18v16H3Z");
}

.ft5dv1b6b {
  fill: none;
}

.tygx0ibpe {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 4h18v16H3Zm12 4a3 3 0 0 1-6 0");
}
</style><g class="ft5dv1b6b"><path class="daa2uvb1b"/><path class="tygx0ibpe"/></g>`,
		"fallback": "coolicons:shopping-bag-alt-duotone-sharp",
	});
}

export default Component;
