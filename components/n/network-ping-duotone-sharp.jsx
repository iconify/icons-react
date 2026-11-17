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

.svbzpac6s {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 18a2 2 0 1 0 4 0a2 2 0 0 0-4 0M17 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0M5 11c4 0 7 3 7 7M5 5c7 0 13 6 13 13");
}

.wu8u-u0iw {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17 5a2 2 0 1 1 3.999-.001A2 2 0 0 1 17 5M3 18a2 2 0 1 1 3.999-.001A2 2 0 0 1 3 18");
}
</style><g class="ft5dv1b6b"><path class="wu8u-u0iw"/><path class="svbzpac6s"/></g>`,
		"fallback": "coolicons:network-ping-duotone-sharp",
	});
}

export default Component;
