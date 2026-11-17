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
		"content": `<style>.f3t91bc-s {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 4L3 6v5h3v9h12v-9h3V6l-6-2m0 0a3 3 0 0 1-6 0");
}

.ft5dv1b6b {
  fill: none;
}

.x5k7m0rnb {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 4a3 3 0 1 0 6 0l6 2v5h-3v9H6v-9H3V6Z");
}
</style><g class="ft5dv1b6b"><path class="x5k7m0rnb"/><path class="f3t91bc-s"/></g>`,
		"fallback": "coolicons:shirt-duotone-sharp",
	});
}

export default Component;
