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
		"content": `<style>.wqyjq5bca {
  fill: currentColor;
  d: path("M10 6h4V3a1 1 0 0 1 2 0v3h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-5v3a1 1 0 0 1-2 0v-3H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2V3a1 1 0 0 1 2 0Z");
}
</style><path class="wqyjq5bca"/>`,
		"fallback": "coolicons:plug-fill-sharp",
	});
}

export default Component;
