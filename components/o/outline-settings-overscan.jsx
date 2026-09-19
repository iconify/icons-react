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
		"content": `<style>.f35wmcumz {
  fill: currentColor;
  d: path("M12.01 5.5L10 8h4zM18 10v4l2.5-1.99zM6 10l-2.5 2.01L6 14zm8 6h-4l2.01 2.5zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16.01H3V4.99h18z");
}
</style><path class="f35wmcumz"/>`,
		"fallback": "ic:outline-settings-overscan",
	});
}

export default Component;
