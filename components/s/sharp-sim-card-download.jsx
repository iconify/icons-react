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
		"content": `<style>.h_qgrr0lu {
  fill: currentColor;
  d: path("M20 2H10L4 8v14h16zm-8 15l-4-4h3V9.02L13 9v4h3z");
}
</style><path class="h_qgrr0lu"/>`,
		"fallback": "ic:sharp-sim-card-download",
	});
}

export default Component;
