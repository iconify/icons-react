import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t4ej80bgf {
  fill: currentColor;
  d: path("M5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm3.5 4V4H15a2 2 0 0 1 2 2v1zm0 1H17v5a2 2 0 0 1-2 2H8.5zM5 4h2.5v11H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2");
}
</style><path class="t4ej80bgf"/>`,
		"fallback": "fluent:panel-left-header-20-regular",
	});
}

export default Component;
