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
		"content": `<style>.f-jwa9ztf {
  fill: currentColor;
  d: path("M15 7h2v2h-2zM7 7h2v2H7zm4 0h2v2h-2z");
}

.n0apn84ov {
  fill: currentColor;
  d: path("M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2m16 14H5V5h14z");
}

.pez-d49ew {
  fill: currentColor;
  d: path("M5 19h14V5H5zM15 7h2v2h-2zm-4 0h2v2h-2zM7 7h2v2H7z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="pez-d49ew"/><path class="n0apn84ov"/><path class="f-jwa9ztf"/>`,
		"fallback": "ic:twotone-padding",
	});
}

export default Component;
