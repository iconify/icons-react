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

.fv2y2eb1e {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12.57 6.58A6.98 6.98 0 0 1 18 4h3a1 1 0 0 1 1 1v1a7 7 0 0 1-7 7h-3a1 1 0 0 1-1-1H9a7 7 0 0 1-7-7V3a1 1 0 0 1 1-1h3a7.01 7.01 0 0 1 6.57 4.58M18 16v1a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5v-1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1");
}

.qf3e30bpa {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 16h10v1a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4zm5 0V9m0 0a6 6 0 0 0-6-6H3v2a6 6 0 0 0 6 6h3Zm0 2a6 6 0 0 1 6-6h3v1a6 6 0 0 1-6 6h-3Z");
}
</style><g class="ft5dv1b6b"><path class="fv2y2eb1e"/><path class="qf3e30bpa"/></g>`,
		"fallback": "coolicons:potted-plant-duotone-round",
	});
}

export default Component;
