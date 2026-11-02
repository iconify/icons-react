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

.i8l66kykq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m12 4l8 8l-8 8l-8-8V4Zm-3 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2");
}

.u5smbtljw {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 4h4l8 8l-8 8l-8-8V4zm0 5a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><g class="ft5dv1b6b"><path class="i8l66kykq"/><path class="u5smbtljw"/></g>`,
		"fallback": "coolicons:tag-duotone-sharp",
	});
}

export default Component;
