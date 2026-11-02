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

.pk9prbcbl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 11c.369.369-.262 1-1 1h-2l5 5c.369.369-.262 1-1 1H5c-.738 0-1.369-.631-1-1l5-5H7c-.738 0-1.369-.631-1-1l4-4H7l5-4l5 4h-3Z");
}

.y21gcmbkk {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m14 7l4 4c.369.369-.262 1-1 1h-2l5 5c.369.369-.262 1-1 1H5c-.738 0-1.369-.631-1-1l5-5H7c-.738 0-1.369-.631-1-1l4-4H7l5-4l5 4zm-2 11v3");
}
</style><g class="ft5dv1b6b"><path class="pk9prbcbl"/><path class="y21gcmbkk"/></g>`,
		"fallback": "coolicons:tree-pine-duotone-round",
	});
}

export default Component;
