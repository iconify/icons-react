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

.kfz_v3cnd {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 17V6l3-3h8l3 3v11zm3 0l-2 4m10-4l2 4M5 10h14M9 14h.01M15 14h.01");
}

.t2xtcyb4m {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m5 6l3-3h8l3 3v11H5Z");
}
</style><g class="ft5dv1b6b"><path class="t2xtcyb4m"/><path class="kfz_v3cnd"/></g>`,
		"fallback": "coolicons:train-duotone-sharp",
	});
}

export default Component;
