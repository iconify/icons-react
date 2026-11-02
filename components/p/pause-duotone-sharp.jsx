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

.sgm-9y-no {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 3h5v18H4Zm11 0h5v18h-5Z");
}

.wuynrlb9p {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 3v18H4V3Zm11 0v18h-5V3Z");
}
</style><g class="ft5dv1b6b"><path class="wuynrlb9p"/><path class="sgm-9y-no"/></g>`,
		"fallback": "coolicons:pause-duotone-sharp",
	});
}

export default Component;
