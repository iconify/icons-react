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
		"content": `<style>.b1xu3-eih {
  fill: currentColor;
  d: path("M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2zm-2.5 16h-2.5a.75.75 0 0 0-.102 1.493l.102.007h2.5a.75.75 0 0 0 0-1.5m1.25-9.001h-5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5M14.5 5h-5a.5.5 0 0 0-.5.5v1.997a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V5.5a.5.5 0 0 0-.5-.5");
}
</style><path class="b1xu3-eih"/>`,
		"fallback": "fluent:view-desktop-mobile-24-filled",
	});
}

export default Component;
