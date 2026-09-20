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
		"content": `<style>.ts2j4fbbi {
  fill: currentColor;
  d: path("M11 15h1.5v-2H16V9h-5zm6 0h1.5V9H17zm-4.5-3.5v-1h2v1zM5 15h5V9H8.5v4.5h-2V9H5zm-3 5V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="ts2j4fbbi"/>`,
		"fallback": "material-symbols:upi-pay-outline-sharp",
	});
}

export default Component;
