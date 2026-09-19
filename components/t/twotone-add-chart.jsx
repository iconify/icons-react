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

.omilo2bku {
  fill: currentColor;
  d: path("M7 10h2v7H7zm12-5V3h-2v2h-2v2h2v2h2V7h2V5z");
}

.qps7k_i9f {
  fill: currentColor;
  d: path("M11 7h2v10h-2zm4 6h2v4h-2z");
}
</style><path class="qps7k_i9f"/><path class="dwu8l7bop"/><path class="omilo2bku"/>`,
		"fallback": "ic:twotone-add-chart",
	});
}

export default Component;
