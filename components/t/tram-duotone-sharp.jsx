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
		"content": `<style>.emxugccdv {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 7h14v12H5zm3 12l-1 2m9-2l1 2M5 13h14M9 3h6m-3 0v4m-3 9h.01M15 16h.01");
}

.ft5dv1b6b {
  fill: none;
}

.zor-fj4db {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 7h14v12H5Z");
}
</style><g class="ft5dv1b6b"><path class="zor-fj4db"/><path class="emxugccdv"/></g>`,
		"fallback": "coolicons:tram-duotone-sharp",
	});
}

export default Component;
