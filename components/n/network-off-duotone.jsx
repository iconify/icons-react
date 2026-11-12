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
		"content": `<style>.c9h4zpb_s {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3h2a1 1 0 0 1 1 1v2M3 17a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm18 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3M6 16v-2a2 2 0 0 1 2-2h7M5 2l17 17");
}

.ft5dv1b6b {
  fill: none;
}

.nq9frdb0a {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 3h2a1 1 0 0 1 1 1v2Zm-2 5a1 1 0 0 1-1-1V6l2 2Zm-6 8h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m17 4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3l2 2Z");
}
</style><g class="ft5dv1b6b"><path class="nq9frdb0a"/><path class="c9h4zpb_s"/></g>`,
		"fallback": "coolicons:network-off-duotone",
	});
}

export default Component;
