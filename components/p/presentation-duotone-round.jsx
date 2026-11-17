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

.odj-_tbzq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 3v9a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V3M3 3h18m-9 13l-5 5m5-5l5 5");
}

.s3bb4zoln {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 3v9a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V3Z");
}
</style><g class="ft5dv1b6b"><path class="s3bb4zoln"/><path class="odj-_tbzq"/></g>`,
		"fallback": "coolicons:presentation-duotone-round",
	});
}

export default Component;
