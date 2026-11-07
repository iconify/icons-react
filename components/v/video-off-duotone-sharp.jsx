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

.ug-v5fbjk {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 16v2H3V6h2m6 0h4v4m0 0l6-3v9M2 3l19 19");
}

.vynt3rbbr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15 16v2H3V6h2Zm0-6l-4-4h4Zm0 0l6-3v9Z");
}
</style><g class="ft5dv1b6b"><path class="vynt3rbbr"/><path class="ug-v5fbjk"/></g>`,
		"fallback": "coolicons:video-off-duotone-sharp",
	});
}

export default Component;
