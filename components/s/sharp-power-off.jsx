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
		"content": `<style>.h-5bdr-yx {
  fill: currentColor;
  d: path("M18 14.49V9c0-1.1-.9-2-2-2V3h-2v4h-3.88l7.69 7.69zM10 3H8v1.88l2 2zm-5.88.84L2.71 5.25l3.34 3.34c-.03.13-.05.27-.05.4v5.51L9.5 18v3h5v-3l.48-.48l4.47 4.47l1.41-1.41z");
}
</style><path class="h-5bdr-yx"/>`,
		"fallback": "ic:sharp-power-off",
	});
}

export default Component;
