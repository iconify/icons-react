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

.pnii4qbyq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 16h10v5H7zm5 0V9m0 0a6 6 0 0 0-6-6H3v2a6 6 0 0 0 6 6h3Zm0 2a6 6 0 0 1 6-6h3v1a6 6 0 0 1-6 6h-3Z");
}

.yq82d_4to {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 9v2a6 6 0 0 1 6-6h3v1a6 6 0 0 1-6 6h-3v-1H9a6 6 0 0 1-6-6V3h3a6 6 0 0 1 6 6m5 7v5H7v-5Z");
}
</style><g class="ft5dv1b6b"><path class="yq82d_4to"/><path class="pnii4qbyq"/></g>`,
		"fallback": "coolicons:potted-plant-duotone-sharp",
	});
}

export default Component;
