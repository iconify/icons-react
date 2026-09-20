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
		"content": `<style>.bgr-epbfv {
  fill: currentColor;
  d: path("M5.25 4A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h13.5A3.25 3.25 0 0 0 22 16.75v-9.5A3.25 3.25 0 0 0 18.75 4zm4.25 6.5h11v6.25a1.75 1.75 0 0 1-1.75 1.75H9.5zm11-1.5h-11V5.5h9.25c.966 0 1.75.784 1.75 1.75zM5.25 5.5H8v13H5.25a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75");
}
</style><path class="bgr-epbfv"/>`,
		"fallback": "fluent:panel-left-header-24-regular",
	});
}

export default Component;
