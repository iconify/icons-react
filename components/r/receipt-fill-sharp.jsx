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
		"content": `<style>.hzwpy4b1p {
  fill: currentColor;
  d: path("M4 2h16a1 1 0 0 1 1 1v18a1.002 1.002 0 0 1-1.707.707L18 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L14 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L10 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L6 20.414l-1.293 1.293A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1m4 4a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Zm0 4a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Zm0 4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Z");
}
</style><path class="hzwpy4b1p"/>`,
		"fallback": "coolicons:receipt-fill-sharp",
	});
}

export default Component;
