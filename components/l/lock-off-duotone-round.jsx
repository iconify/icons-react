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

.i27ep3btg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13 10h3a4 4 0 0 1 4 4v3Zm4.646 10.646A4 4 0 0 1 16 21H8a4 4 0 0 1-4-4v-3a4.006 4.006 0 0 1 3.101-3.899Z");
}

.sjfdi9bad {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.647 20.647A4 4 0 0 1 16 21H8a4 4 0 0 1-4-4v-3c0-1.9 1.325-3.49 3.101-3.899M13 10h3a4 4 0 0 1 4 4v3M9 6a3 3 0 0 1 6 0v4M2 5l17 17");
}
</style><g class="ft5dv1b6b"><path class="i27ep3btg"/><path class="sjfdi9bad"/></g>`,
		"fallback": "coolicons:lock-off-duotone-round",
	});
}

export default Component;
