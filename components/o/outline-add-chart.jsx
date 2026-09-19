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
		"content": `<style>.dwu8l7bop {
  fill: currentColor;
  d: path("M19 19H5V5h9V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2z");
}

.zysbdqb-t {
  fill: currentColor;
  d: path("M15 13h2v4h-2zm-8-3h2v7H7zm4-3h2v10h-2zm8-2V3h-2v2h-2v2h2v2h2V7h2V5z");
}
</style><path class="dwu8l7bop"/><path class="zysbdqb-t"/>`,
		"fallback": "ic:outline-add-chart",
	});
}

export default Component;
