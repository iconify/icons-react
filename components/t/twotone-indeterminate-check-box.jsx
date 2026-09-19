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
		"content": `<style>.xrc7gmb8k {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM7 11h10v2H7z");
}

.zo-t58tex {
  fill: currentColor;
  d: path("M5 19h14V5H5zm2-8h10v2H7z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="zo-t58tex"/><path class="xrc7gmb8k"/>`,
		"fallback": "ic:twotone-indeterminate-check-box",
	});
}

export default Component;
