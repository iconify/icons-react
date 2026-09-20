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
		"content": `<style>.k45938crj {
  fill: currentColor;
  d: path("M4.5 10a2 2 0 0 1 2-2h7a2 2 0 1 1 0 4h-7a2 2 0 0 1-2-2m2-1a1 1 0 0 0 0 2h7a1 1 0 1 0 0-2z");
}
</style><path class="k45938crj"/>`,
		"fallback": "fluent:port-usb-c-20-regular",
	});
}

export default Component;
