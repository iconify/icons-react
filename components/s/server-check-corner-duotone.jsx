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

.suig15bml {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6 14H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4M7 7h.01M7 17h.01M13 17l3 3l5-6");
}

.y3t8k7w2v {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6 8v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Z");
}
</style><g class="ft5dv1b6b"><path class="y3t8k7w2v"/><path class="suig15bml"/></g>`,
		"fallback": "coolicons:server-check-corner-duotone",
	});
}

export default Component;
