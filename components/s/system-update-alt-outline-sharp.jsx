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
		"content": `<style>.e5hqihoyd {
  fill: currentColor;
  d: path("M2 20V4h7v2H4v12h16V6h-5V4h7v16zm10-4.6l-5-5L8.4 9l2.6 2.6V4h2v7.6L15.6 9l1.4 1.4z");
}
</style><path class="e5hqihoyd"/>`,
		"fallback": "material-symbols:system-update-alt-outline-sharp",
	});
}

export default Component;
