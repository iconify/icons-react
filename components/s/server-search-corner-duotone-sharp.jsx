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
		"content": `<style>.ee9oz6h2c {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 4h18v6H3Zm0 10h6v6H3Z");
}

.ft5dv1b6b {
  fill: none;
}

.rl8dm6x4w {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 4h18v6H3Zm6 16H3v-6h6M7 7h.01M7 17h.01M18 18a2.828 2.828 0 1 1-4-4a2.828 2.828 0 0 1 4 4m0 0l3 3");
}
</style><g class="ft5dv1b6b"><path class="ee9oz6h2c"/><path class="rl8dm6x4w"/></g>`,
		"fallback": "coolicons:server-search-corner-duotone-sharp",
	});
}

export default Component;
