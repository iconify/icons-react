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

.p-88rzyrq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 16v-5a4 4 0 0 1 4-4h5m3 3v3a4 4 0 0 1-4 4h-3m1 0v4M9 3v4m6-4v4M2 20L20 2");
}

.sbjs6qbal {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6.716 15.284A3.97 3.97 0 0 1 6 13v-2a4 4 0 0 1 4-4h4q.455 0 .899.101Zm11.183-5.183q.1.444.101.899v2a4 4 0 0 1-4 4h-3Z");
}
</style><g class="ft5dv1b6b"><path class="sbjs6qbal"/><path class="p-88rzyrq"/></g>`,
		"fallback": "coolicons:plug-off-duotone-round",
	});
}

export default Component;
