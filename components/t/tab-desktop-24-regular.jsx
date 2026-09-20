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
		"content": `<style>.jm_0ew3hp {
  fill: currentColor;
  d: path("M5.75 3A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21h12.5A2.75 2.75 0 0 0 21 18.25V5.75A2.75 2.75 0 0 0 18.25 3zM11 4.5v1.25A2.25 2.25 0 0 0 13.25 8h6.25v10.25c0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25V5.75c0-.69.56-1.25 1.25-1.25zm8.5 2h-6.25a.75.75 0 0 1-.75-.75V4.5h5.75c.69 0 1.25.56 1.25 1.25z");
}
</style><path class="jm_0ew3hp"/>`,
		"fallback": "fluent:tab-desktop-24-regular",
	});
}

export default Component;
