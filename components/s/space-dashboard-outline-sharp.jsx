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
		"content": `<style>.wkno-zb5w {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h6V5H5zm8 0h6v-7h-6zm0-9h6V5h-6z");
}
</style><path class="wkno-zb5w"/>`,
		"fallback": "material-symbols:space-dashboard-outline-sharp",
	});
}

export default Component;
