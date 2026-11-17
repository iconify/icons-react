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

.jisbgab1t {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 10h18M4 10l2 7c.507 1.776 1.732 3 3 3h6c1.268 0 2.493-1.224 3-3l2-7m-10 0v10m4-10v10M5 10l4-6m10 6l-4-6");
}

.qpt8g2thl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 10h16l-2 7c-.507 1.776-1.732 3-3 3H9c-1.268 0-2.493-1.224-3-3Z");
}
</style><g class="ft5dv1b6b"><path class="qpt8g2thl"/><path class="jisbgab1t"/></g>`,
		"fallback": "coolicons:shopping-basket-duotone-round",
	});
}

export default Component;
