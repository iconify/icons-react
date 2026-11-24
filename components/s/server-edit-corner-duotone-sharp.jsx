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
		"content": `<style>.fsc6r890v {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 4v6H3V4Zm-8 17v-3l5-5l3 3l-5 5Zm-4-7v6H3v-6Z");
}

.ft5dv1b6b {
  fill: none;
}

.oht_v0ufd {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 4h18v6H3Zm6 16H3v-6h6M7 7h.01M7 17h.01M13 21v-3l5-5l3 3l-5 5Z");
}
</style><g class="ft5dv1b6b"><path class="fsc6r890v"/><path class="oht_v0ufd"/></g>`,
		"fallback": "coolicons:server-edit-corner-duotone-sharp",
	});
}

export default Component;
