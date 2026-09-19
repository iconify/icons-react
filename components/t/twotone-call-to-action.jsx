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
		"content": `<style>.p8v7bcb1o {
  fill: currentColor;
  d: path("M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H3V5h18zM5 15h14v3H5z");
}

.rvujc4b6l {
  fill: currentColor;
  d: path("M3 19h18V5H3zm2-4h14v3H5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="rvujc4b6l"/><path class="p8v7bcb1o"/>`,
		"fallback": "ic:twotone-call-to-action",
	});
}

export default Component;
