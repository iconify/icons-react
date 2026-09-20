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
		"content": `<style>.p9ejy_b4u {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h8.5V5H5zm9.5 0H19v-6.5h-4.5zm0-7.5H19V5h-4.5z");
}
</style><path class="p9ejy_b4u"/>`,
		"fallback": "material-symbols-light:space-dashboard-2-outline-sharp",
	});
}

export default Component;
