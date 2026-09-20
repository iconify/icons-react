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
		"content": `<style>.mjo_wjbji {
  fill: currentColor;
  d: path("M8 12h8v-2H8zm0-4h8V6H8zm12 12.55L14.975 14H4V2h16zM4 22v-6h10l4.6 6z");
}
</style><path class="mjo_wjbji"/>`,
		"fallback": "material-symbols:lab-profile-sharp",
	});
}

export default Component;
