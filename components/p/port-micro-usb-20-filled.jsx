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
		"content": `<style>.y_puwdbzt {
  fill: currentColor;
  d: path("M6.433 8.3a1.5 1.5 0 0 1 .9-.3h5.334c.324 0 .64.105.9.3l1.333 1A1.5 1.5 0 0 1 14 12H6a1.5 1.5 0 0 1-.9-2.7z");
}
</style><path class="y_puwdbzt"/>`,
		"fallback": "fluent:port-micro-usb-20-filled",
	});
}

export default Component;
