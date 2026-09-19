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
		"content": `<style>.k_tlm7b0u {
  fill: currentColor;
  d: path("M2.01 6L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2M4 6.47L5.76 10H20v8H4z");
}

.m5amwccvb {
  fill: currentColor;
  d: path("M20 10H5.76L4 6.47V18h16z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="m5amwccvb"/><path class="k_tlm7b0u"/>`,
		"fallback": "ic:twotone-movie",
	});
}

export default Component;
