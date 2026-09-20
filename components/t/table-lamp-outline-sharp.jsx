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
		"content": `<style>.wbd_hhw6n {
  fill: currentColor;
  d: path("M13 21v-2h8v2zM5.525 9H9V5H7.275zM16 18V7h-5v4H2.475l3.5-8H11v2h7v13zM5.525 9H9z");
}
</style><path class="wbd_hhw6n"/>`,
		"fallback": "material-symbols:table-lamp-outline-sharp",
	});
}

export default Component;
