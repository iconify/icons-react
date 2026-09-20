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
		"content": `<style>.wtjv3-bxb {
  fill: currentColor;
  d: path("M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M96 56a32 32 0 0 1 64 0v24H96Zm88 136H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16m0-32H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16m0-32H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16");
}
</style><path class="wtjv3-bxb"/>`,
		"fallback": "ph:lock-laminated-fill",
	});
}

export default Component;
