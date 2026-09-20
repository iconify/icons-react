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
		"content": `<style>.qeokm7bho {
  fill: currentColor;
  d: path("M18 8H6a2.006 2.006 0 0 0-2 2v4a2.006 2.006 0 0 0 2 2h12a2.006 2.006 0 0 0 2-2v-4a2.006 2.006 0 0 0-2-2M6 10h12v2H6z");
}
</style><path class="qeokm7bho"/>`,
		"fallback": "fluent:port-usb-a-24-filled",
	});
}

export default Component;
