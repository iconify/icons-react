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
		"content": `<style>.obasamyla {
  fill: currentColor;
  d: path("M4 11V4h7v7zm1-1h5V5H5zM4 20v-7h7v7zm1-1h5v-5H5zm8-8V4h7v7zm1-1h5V5h-5zm4.25 10v-1.75H20V20zM13 14.75V13h1.75v1.75zm1.75 1.75v-1.75h1.75v1.75zM13 18.25V16.5h1.75v1.75zM14.75 20v-1.75h1.75V20zm1.75-1.75V16.5h1.75v1.75zm0-3.5V13h1.75v1.75zm1.75 1.75v-1.75H20v1.75z");
}
</style><path class="obasamyla"/>`,
		"fallback": "material-symbols-light:qr-code-outline",
	});
}

export default Component;
