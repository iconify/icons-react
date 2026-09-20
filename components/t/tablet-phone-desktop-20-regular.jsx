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
		"content": `<style>.b2c_aoiqm {
  fill: currentColor;
  d: path("M13 3a2 2 0 0 1 2 2v2h1.5A1.5 1.5 0 0 1 18 8.5v6a1.5 1.5 0 0 1-1.5 1.5H14v1h.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h.5v-1H8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-2 14h2v-1h-2zm-6-1h2v-4H5zm2.5-8a.5.5 0 0 0-.5.5V11a1 1 0 0 1 1 1v3h8.5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5zM4 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1a1 1 0 0 1 1-1h1V8.5A1.5 1.5 0 0 1 7.5 7H14V5a1 1 0 0 0-1-1z");
}
</style><path class="b2c_aoiqm"/>`,
		"fallback": "fluent:tablet-phone-desktop-20-regular",
	});
}

export default Component;
