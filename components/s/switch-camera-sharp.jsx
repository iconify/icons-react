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
		"content": `<style>.q2g_yubfi {
  fill: currentColor;
  d: path("M2 21V5h5.15L9 3h6l1.85 2H22v16zm7-4l1.4-1.4l-1.55-1.55h6.3L13.6 15.6L15 17l4-4l-4-4l-1.4 1.4l1.6 1.65H8.8l1.6-1.65L9 9l-4 4z");
}
</style><path class="q2g_yubfi"/>`,
		"fallback": "material-symbols:switch-camera-sharp",
	});
}

export default Component;
