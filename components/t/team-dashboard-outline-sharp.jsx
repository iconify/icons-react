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
		"content": `<style>.z28tpzb4d {
  fill: currentColor;
  d: path("M3 21V3h18v18zm7-2v-6H5v6zm2 0h7v-6h-7zm-7-8h14V5H5z");
}
</style><path class="z28tpzb4d"/>`,
		"fallback": "material-symbols:team-dashboard-outline-sharp",
	});
}

export default Component;
