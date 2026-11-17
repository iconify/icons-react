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

.om_v6ns4f {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13 10a3 3 0 0 0-3 3v8H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4Z");
}

.woao9qv_b {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12V7a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v3m-3 11H7a4 4 0 0 1-4-4v-5m17 4l-3-3l-3 3m3-3v8");
}
</style><g class="ft5dv1b6b"><path class="om_v6ns4f"/><path class="woao9qv_b"/></g>`,
		"fallback": "coolicons:mobile-upload-corner-duotone-round",
	});
}

export default Component;
