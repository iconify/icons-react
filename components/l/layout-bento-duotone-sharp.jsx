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
		"content": `<style>.bckvw083f {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 4v16H4V4Zm10 0v6h-6V4Zm0 10v6h-6v-6Z");
}

.ft5dv1b6b {
  fill: none;
}

.slhzj9bth {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4h6v16H4Zm10 10h6v6h-6Zm0-10h6v6h-6Z");
}
</style><g class="ft5dv1b6b"><path class="bckvw083f"/><path class="slhzj9bth"/></g>`,
		"fallback": "coolicons:layout-bento-duotone-sharp",
	});
}

export default Component;
