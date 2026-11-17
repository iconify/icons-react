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

.yxtxqccwr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4h8v5M9 20H4V4h8M4 9h16M4 15h5m3-11v5m1 8h8m-4-4v8");
}

.zx9ghfbrn {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 4v5H9v11H4V4Z");
}
</style><g class="ft5dv1b6b"><path class="zx9ghfbrn"/><path class="yxtxqccwr"/></g>`,
		"fallback": "coolicons:table-plus-corner-duotone-sharp",
	});
}

export default Component;
