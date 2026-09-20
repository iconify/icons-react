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
		"content": `<style>.rgygz6bqe {
  fill: currentColor;
  d: path("M3 21V3h8v18zm10-11V3h8v7zm8 11h-8v-9h8z");
}
</style><path class="rgygz6bqe"/>`,
		"fallback": "material-symbols:space-dashboard-sharp",
	});
}

export default Component;
