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
		"content": `<style>.d0_hsfbao {
  fill: currentColor;
  d: path("M7.616 22q-.691 0-1.153-.462T6 20.385V15h1v3.5h10v-13H7V9H6V3.616q0-.691.463-1.153T7.616 2h8.769q.69 0 1.152.463T18 3.616v16.769q0 .69-.462 1.153T16.384 22zM10 15.308l-.708-.708l2.089-2.1H2.5v-1h8.88L9.293 9.4L10 8.692L13.308 12z");
}
</style><path class="d0_hsfbao"/>`,
		"fallback": "material-symbols-light:open-in-phone",
	});
}

export default Component;
