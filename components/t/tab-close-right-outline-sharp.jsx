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
		"content": `<style>.nizfu9b_u {
  fill: currentColor;
  d: path("M9.15 16.25L12 13.4l2.85 2.85l1.4-1.4L13.4 12l2.85-2.85l-1.4-1.4L12 10.6L9.15 7.75l-1.4 1.4L10.6 12l-2.85 2.85zM5 19V5zm-2 2V3h18v10.35q-.475-.175-.975-.262T19 13V5H5v14h8q0 .525.088 1.025t.262.975zm16 2l-1.4-1.4l1.575-1.6H15v-2h4.175L17.6 16.4L19 15l4 4z");
}
</style><path class="nizfu9b_u"/>`,
		"fallback": "material-symbols:tab-close-right-outline-sharp",
	});
}

export default Component;
