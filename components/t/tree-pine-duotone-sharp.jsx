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
		"content": `<style>.fbvlvacpp {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 3l5 4h-3l5 5h-4l6 6H3l6-6H5l5-5H7zm0 15v3");
}

.ft5dv1b6b {
  fill: none;
}

.ib7a4r0ji {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17 7h-3l5 5h-4l6 6H3l6-6H5l5-5H7l5-4Z");
}
</style><g class="ft5dv1b6b"><path class="ib7a4r0ji"/><path class="fbvlvacpp"/></g>`,
		"fallback": "coolicons:tree-pine-duotone-sharp",
	});
}

export default Component;
