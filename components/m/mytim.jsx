import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g92vhsbfc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.685 10.627H43.5M4.5 24h14.635M4.5 37.373h14.635M28.434 24h14.635M28.434 37.373h14.635");
}
</style><path class="g92vhsbfc"/>`,
		"fallback": "arcticons:mytim",
	});
}

export default Component;
