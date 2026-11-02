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
		"content": `<style>.anqgv2bxd {
  fill: currentColor;
  d: path("M13 9.874V14h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h3v-1a1 1 0 0 1 2 0v1h3V9.874a4 4 0 1 1 2 0");
}
</style><path class="anqgv2bxd"/>`,
		"fallback": "coolicons:joystick-fill-sharp",
	});
}

export default Component;
