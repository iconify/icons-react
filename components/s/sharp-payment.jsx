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
		"content": `<style>.s4wbcpb6b {
  fill: currentColor;
  d: path("M22 4H2v16h20zm-2 14H4v-6h16zm0-10H4V6h16z");
}
</style><path class="s4wbcpb6b"/>`,
		"fallback": "ic:sharp-payment",
	});
}

export default Component;
