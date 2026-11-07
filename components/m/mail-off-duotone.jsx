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

.h7cv2_19z {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m6 0h8a2 2 0 0 1 2 2v8m-2 4h-7m4-9l4-4M2 2l20 20");
}

.vunrrrb4z {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 19H5a2.003 2.003 0 0 1-2-2V7a2.003 2.003 0 0 1 2-2ZM11 5h8a2.003 2.003 0 0 1 2 2v8Z");
}
</style><g class="ft5dv1b6b"><path class="vunrrrb4z"/><path class="h7cv2_19z"/></g>`,
		"fallback": "coolicons:mail-off-duotone",
	});
}

export default Component;
