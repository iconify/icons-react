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
		"content": `<style>.ej8so_b9v {
  fill: currentColor;
  d: path("M19 12a2.996 2.996 0 0 1-3 3H8a3 3 0 0 1 0-6h8a2.996 2.996 0 0 1 3 3");
}
</style><path class="ej8so_b9v"/>`,
		"fallback": "fluent:port-usb-c-24-filled",
	});
}

export default Component;
