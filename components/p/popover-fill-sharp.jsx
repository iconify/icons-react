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
		"content": `<style>.l7isffc7n {
  fill: currentColor;
  d: path("M3 6h5.5l2.7-3.6a1 1 0 0 1 1.6 0L15.5 6H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1m14 5H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2M7 15a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z");
}
</style><path class="l7isffc7n"/>`,
		"fallback": "coolicons:popover-fill-sharp",
	});
}

export default Component;
