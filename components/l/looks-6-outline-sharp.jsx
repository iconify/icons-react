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
		"content": `<style>.gskt1sm_r {
  fill: currentColor;
  d: path("M11 11V9h3V7H9v10h6v-6zm0 2h2v2h-2zm-8 8V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="gskt1sm_r"/>`,
		"fallback": "material-symbols:looks-6-outline-sharp",
	});
}

export default Component;
