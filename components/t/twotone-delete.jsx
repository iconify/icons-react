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
		"content": `<style>.j7kwykujw {
  fill: currentColor;
  d: path("m15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8z");
}

.w-fqygbbb {
  fill: currentColor;
  d: path("M8 9h8v10H8z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="w-fqygbbb"/><path class="j7kwykujw"/>`,
		"fallback": "ic:twotone-delete",
	});
}

export default Component;
