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
		"content": `<style>.b2g_sbo7h {
  fill: currentColor;
  d: path("M22 7h-5V5.5h2.9q-1.65-1.45-3.675-2.225T12 2.5t-4.225.775T4.1 5.5H7V7H2V2h1.5v2.025q1.8-1.475 3.975-2.25T12 1t4.525.775t3.975 2.25V2H22zM10.575 22L4.6 16l1.575-1.625l2.825.8V6h2v8h1v-4h2v4h1v-3h2v3h1v-1h2v9z");
}
</style><path class="b2g_sbo7h"/>`,
		"fallback": "material-symbols:swipe-sharp",
	});
}

export default Component;
