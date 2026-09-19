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
		"content": `<style>.qs-eaqb4g {
  fill: currentColor;
  d: path("M22 4H2.01L2 20h20zm-2 14H4v-6h16zm0-10H4V6h16z");
}
</style><path class="qs-eaqb4g"/>`,
		"fallback": "ic:sharp-credit-card",
	});
}

export default Component;
