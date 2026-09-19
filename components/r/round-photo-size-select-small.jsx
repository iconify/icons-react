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
		"content": `<style>.g88uq0ofa {
  fill: currentColor;
  d: path("M23 15h-2v2h2zm0-4h-2v2h2zm0 8h-2v2c1 0 2-1 2-2M15 3h-2v2h2zm8 4h-2v2h2zm-2-4v2h2c0-1-1-2-2-2M3 21h8v-4c0-1.1-.9-2-2-2H1v4c0 1.1.9 2 2 2M3 7H1v2h2zm12 12h-2v2h2zm4-16h-2v2h2zm0 16h-2v2h2zM3 3C2 3 1 4 1 5h2zm0 8H1v2h2zm8-8H9v2h2zM7 3H5v2h2z");
}
</style><path class="g88uq0ofa"/>`,
		"fallback": "ic:round-photo-size-select-small",
	});
}

export default Component;
