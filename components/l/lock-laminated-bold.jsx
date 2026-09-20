import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ah6q_f1og {
  fill: currentColor;
  d: path("M208 76h-28V56a52 52 0 0 0-104 0v20H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V96a20 20 0 0 0-20-20M52 144h152v16H52Zm48-88a28 28 0 0 1 56 0v20h-56Zm104 44v20H52v-20ZM52 204v-20h152v20Z");
}
</style><path class="ah6q_f1og"/>`,
		"fallback": "ph:lock-laminated-bold",
	});
}

export default Component;
