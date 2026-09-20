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
		"content": `<style>.rggnoobgu {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4H11.5v16zm6.884 0v-8H20v6.385q0 .69-.462 1.152T18.384 20zm0-9V4h5.885q.69 0 1.152.463T20 5.616V11z");
}
</style><path class="rggnoobgu"/>`,
		"fallback": "material-symbols-light:space-dashboard",
	});
}

export default Component;
