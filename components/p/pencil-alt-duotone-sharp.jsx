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

.pa5v2-lml {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 16L16 4l4 4L8 20m0 0H4v-4");
}

.vwh2dlb2y {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 16L16 4l4 4L8 20H4Z");
}
</style><g class="ft5dv1b6b"><path class="vwh2dlb2y"/><path class="pa5v2-lml"/></g>`,
		"fallback": "coolicons:pencil-alt-duotone-sharp",
	});
}

export default Component;
