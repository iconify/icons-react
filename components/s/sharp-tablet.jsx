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
		"content": `<style>.ys0xw46sh {
  fill: currentColor;
  d: path("M23 4H1v16h21.99zm-4 14H5V6h14z");
}
</style><path class="ys0xw46sh"/>`,
		"fallback": "ic:sharp-tablet",
	});
}

export default Component;
