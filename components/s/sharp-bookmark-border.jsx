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
		"content": `<style>.e7qrhabmy {
  fill: currentColor;
  d: path("M19 3H5v18l7-3l7 3zm-2 15l-5-2.18L7 18V5h10z");
}
</style><path class="e7qrhabmy"/>`,
		"fallback": "ic:sharp-bookmark-border",
	});
}

export default Component;
