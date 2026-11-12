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
		"content": `<style>.tdjsjkv6x {
  fill: currentColor;
  d: path("M7 6h1.5l2.7-3.6a1 1 0 0 1 1.6 0L15.5 6H17a5 5 0 0 1 5 5v6a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5v-6a5 5 0 0 1 5-5m10 5H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2M7 15a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z");
}
</style><path class="tdjsjkv6x"/>`,
		"fallback": "coolicons:popover-fill-round",
	});
}

export default Component;
