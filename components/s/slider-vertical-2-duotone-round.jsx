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
		"content": `<style>.e3k1fabxe {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m6 6a2 2 0 1 1 0 4a2 2 0 0 1 0-4m6-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4M6 3v5m0 4v9m6-18v11m0 4v3m6-18v3m0 4v11");
}

.ft5dv1b6b {
  fill: none;
}

.zfcj9obxq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 8a2 2 0 1 1-3.999.001A2 2 0 0 1 20 8M8 10a2 2 0 1 1-3.999.001A2 2 0 0 1 8 10m6 6a2 2 0 1 1-3.999.001A2 2 0 0 1 14 16");
}
</style><g class="ft5dv1b6b"><path class="zfcj9obxq"/><path class="e3k1fabxe"/></g>`,
		"fallback": "coolicons:slider-vertical-2-duotone-round",
	});
}

export default Component;
