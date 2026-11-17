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

.rgxq264ky {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 17a4 4 0 1 1 8 0v4H3zm4-4V8c0-4 6-5 7-2l5 15m-3 0h5");
}

.v-xpln2dr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M11 17v4H3v-4a4 4 0 0 1 8 0");
}
</style><g class="ft5dv1b6b"><path class="v-xpln2dr"/><path class="rgxq264ky"/></g>`,
		"fallback": "coolicons:vacuum-cleaner-duotone-sharp",
	});
}

export default Component;
