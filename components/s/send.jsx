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
		"content": `<style>.tunrf6ble {
  fill: currentColor;
  d: path("M4 18.5v-5.154L9.846 12L4 10.654V5.5L19.423 12z");
}
</style><path class="tunrf6ble"/>`,
		"fallback": "material-symbols-light:send",
	});
}

export default Component;
