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
		"content": `<style>.h_ywlzbnh {
  fill: currentColor;
  d: path("M10.83 5H17v9.11l2 2V5c0-1.1-.9-2-2-2h-7L7.94 5.06l1.42 1.42zm10.43 16.21L3.79 3.74L2.38 5.15L5 7.77V19a2 2 0 0 0 2 2h11.23l1.62 1.62zM7 19V9.79L16.23 19z");
}

.p4k0qebpb {
  fill: currentColor;
  d: path("M10.83 5L9.36 6.47L17 14.11V5zM7 9.79V19h9.23z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="p4k0qebpb"/><path class="h_ywlzbnh"/>`,
		"fallback": "ic:twotone-signal-cellular-no-sim",
	});
}

export default Component;
