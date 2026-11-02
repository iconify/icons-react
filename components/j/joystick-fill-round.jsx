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
		"content": `<style>.cr28d1ttx {
  fill: currentColor;
  d: path("M13 9.874V14h5a4 4 0 0 1 0 8H6a4 4 0 0 1 0-8v-1a1 1 0 0 1 2 0v1h3V9.874a4 4 0 1 1 2 0");
}
</style><path class="cr28d1ttx"/>`,
		"fallback": "coolicons:joystick-fill-round",
	});
}

export default Component;
