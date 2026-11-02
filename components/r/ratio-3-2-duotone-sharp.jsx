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
		"content": `<style>.cxu5sjb1s {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 6h18v12H3Z");
}

.ft5dv1b6b {
  fill: none;
}

.q94_vp7xz {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6h18v12H3Z");
}
</style><g class="ft5dv1b6b"><path class="cxu5sjb1s"/><path class="q94_vp7xz"/></g>`,
		"fallback": "coolicons:ratio-3-2-duotone-sharp",
	});
}

export default Component;
