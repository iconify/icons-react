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
		"content": `<style>.dq5hx_b_u {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 7h12v10H3Z");
}

.ft5dv1b6b {
  fill: none;
}

.kt15klw-y {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7h12v10H3Zm6 4v2m12-1h-2m-4-3h6v6h-6");
}
</style><g class="ft5dv1b6b"><path class="dq5hx_b_u"/><path class="kt15klw-y"/></g>`,
		"fallback": "coolicons:security-key-duotone-sharp",
	});
}

export default Component;
