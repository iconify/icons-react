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
		"content": `<style>.llybhmlou {
  fill: currentColor;
  d: path("M3.98 6.81A6.01 6.01 0 0 0 1 12c0 3.31 2.69 6 6 6c2.21 0 4.15-1.2 5.18-2.99l6.89 6.89a.996.996 0 1 0 1.41-1.41L3.51 3.51A.996.996 0 1 0 2.1 4.92zm5.01 5.01c.01.06.01.12.01.18c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2c.06 0 .12 0 .18.01zm11.33 5.68c.42-.37.68-.91.68-1.5v-2c1.1 0 2-.9 2-2s-.9-2-2-2h-8.17z");
}
</style><path class="llybhmlou"/>`,
		"fallback": "ic:round-vpn-key-off",
	});
}

export default Component;
