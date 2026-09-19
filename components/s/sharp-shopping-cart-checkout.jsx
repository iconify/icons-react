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
		"content": `<style>.d_ctyrbes {
  fill: currentColor;
  d: path("M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2m-8.9-5h8.66L21 4.96L19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59L3.61 17H19v-2H7zM12 2l4 4l-4 4l-1.41-1.41L12.17 7H8V5h4.17l-1.59-1.59z");
}
</style><path class="d_ctyrbes"/>`,
		"fallback": "ic:sharp-shopping-cart-checkout",
	});
}

export default Component;
