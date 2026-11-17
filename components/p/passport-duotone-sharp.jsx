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
		"content": `<style>.ckjqj_b3x {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 3h14v18H5Z");
}

.ft5dv1b6b {
  fill: none;
}

.j-fv9gbfc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 3h14v18H5Zm4 14h6m-6-7a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><g class="ft5dv1b6b"><path class="ckjqj_b3x"/><path class="j-fv9gbfc"/></g>`,
		"fallback": "coolicons:passport-duotone-sharp",
	});
}

export default Component;
