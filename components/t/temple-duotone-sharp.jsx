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
		"content": `<style>.a-spkmypt {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21h7m4 0h7M6 12h12a3 3 0 0 0 3-3c-5 0-8-3-9-6c-1 3-4 6-9 6a3 3 0 0 0 3 3m0 9v-9m12 9v-9m-8 9v-3a2 2 0 1 1 4 0v3");
}

.ft5dv1b6b {
  fill: none;
}

.xqycvu5qd {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 12H6a3 3 0 0 1-3-3c5 0 8-3 9-6c1 3 4 6 9 6a3 3 0 0 1-3 3");
}
</style><g class="ft5dv1b6b"><path class="xqycvu5qd"/><path class="a-spkmypt"/></g>`,
		"fallback": "coolicons:temple-duotone-sharp",
	});
}

export default Component;
