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

.qf3e30bpa {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 16h10v1a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4zm5 0V9m0 0a6 6 0 0 0-6-6H3v2a6 6 0 0 0 6 6h3Zm0 2a6 6 0 0 1 6-6h3v1a6 6 0 0 1-6 6h-3Z");
}

.r178ref6f {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 9v2a6 6 0 0 1 6-6h3v1a6 6 0 0 1-6 6h-3v-1H9a6 6 0 0 1-6-6V3h3a6 6 0 0 1 6 6m5 7v1a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-1Z");
}
</style><g class="ft5dv1b6b"><path class="r178ref6f"/><path class="qf3e30bpa"/></g>`,
		"fallback": "coolicons:potted-plant-duotone-round",
	});
}

export default Component;
