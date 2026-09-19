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
		"content": `<style>.qqhb9jy5i {
  fill: currentColor;
  d: path("m11.13 4.57l-8.3 14.94c-.37.67.11 1.49.87 1.49h16.6c.76 0 1.24-.82.87-1.49l-8.3-14.94a.997.997 0 0 0-1.74 0M13 8.92L18.6 19H13zm-2 0V19H5.4z");
}
</style><path class="qqhb9jy5i"/>`,
		"fallback": "ic:round-details",
	});
}

export default Component;
