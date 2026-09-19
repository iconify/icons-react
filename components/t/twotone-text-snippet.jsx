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
		"content": `<style>.dxe6lur1t {
  fill: currentColor;
  d: path("M14.17 5L19 9.83V19H5V5zM7 15h10v2H7zm0-4h10v2H7zm0-4h7v2H7z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.vik19-6bl {
  fill: currentColor;
  d: path("M14.17 5L19 9.83V19H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59M7 15h10v2H7zm0-4h10v2H7zm0-4h7v2H7z");
}
</style><path class="dxe6lur1t"/><path class="vik19-6bl"/>`,
		"fallback": "ic:twotone-text-snippet",
	});
}

export default Component;
