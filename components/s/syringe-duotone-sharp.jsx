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

.x6e3mrbje {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m13 7l-7 7l4 4l7-7m-5-5l6 6M8 16l-4 4m5-9l4 4m2-6l3-3m-2-2l4 4");
}

.zszfs1art {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13.707 14.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0Z");
}
</style><g class="ft5dv1b6b"><path class="zszfs1art"/><path class="x6e3mrbje"/></g>`,
		"fallback": "coolicons:syringe-duotone-sharp",
	});
}

export default Component;
