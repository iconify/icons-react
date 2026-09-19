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
		"content": `<style>.eeidbccgn {
  fill: currentColor;
  d: path("m15.95 7l-1.83-2H9.88L8.05 7H4v12h16V7zM6 17l3-4l2.25 3l3-4L18 17z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.j00g07b8x {
  fill: currentColor;
  d: path("M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 14H4V7h4.05l1.83-2h4.24l1.83 2H20zm-8.75-3L9 13l-3 4h12l-3.75-5z");
}
</style><path class="eeidbccgn"/><path class="j00g07b8x"/>`,
		"fallback": "ic:twotone-photo-camera-back",
	});
}

export default Component;
