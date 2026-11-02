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
		"content": `<style>.bkiq4hk_d {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m11 13l2 2a1.414 1.414 0 0 1 0 2l-1 1H8a2 2 0 0 1-2-2v-4l1-1a1.414 1.414 0 0 1 2 0zm0 0l6-6m-2-2l4 4");
}

.ft5dv1b6b {
  fill: none;
}

.tswytdbuj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13.707 14.293a2.414 2.414 0 0 1 0 3.414l-1 1A1 1 0 0 1 12 19H8a3 3 0 0 1-3-3v-4c0-.265.105-.52.293-.707l1-1a2.414 2.414 0 0 1 3.414 0Z");
}
</style><g class="ft5dv1b6b"><path class="tswytdbuj"/><path class="bkiq4hk_d"/></g>`,
		"fallback": "coolicons:shovel-duotone",
	});
}

export default Component;
