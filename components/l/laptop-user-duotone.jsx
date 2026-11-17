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
		"content": `<style>.dq3d1pxrx {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 16V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10M3 18a2 2 0 0 1 2-2h14a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2m7-9a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-1 7c0-1.105 1.343-2 3-2s3 .895 3 2");
}

.ft5dv1b6b {
  fill: none;
}

.rym-ewnwd {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 16V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10Z");
}
</style><g class="ft5dv1b6b"><path class="rym-ewnwd"/><path class="dq3d1pxrx"/></g>`,
		"fallback": "coolicons:laptop-user-duotone",
	});
}

export default Component;
