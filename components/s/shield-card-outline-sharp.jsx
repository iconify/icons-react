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
		"content": `<style>.h_5vyg_mf {
  fill: currentColor;
  d: path("M11 22v-9h12v9zm2-2h8v-2h-8zm0-4h8v-1h-8zM12 2l8 3v6h-2V6.375l-6-2.25l-6 2.25V11.1q0 2.025.813 3.863T9 18.1v2.6q-2.25-1.5-3.625-4.075T4 11.1V5z");
}
</style><path class="h_5vyg_mf"/>`,
		"fallback": "material-symbols:shield-card-outline-sharp",
	});
}

export default Component;
