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
		"content": `<style>.a6hfftocs {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h8V5H5zm10 0h4v-6h-4zm0-8h4V5h-4z");
}
</style><path class="a6hfftocs"/>`,
		"fallback": "material-symbols:space-dashboard-2-outline-sharp",
	});
}

export default Component;
