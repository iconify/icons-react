import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ey2s9zbyp {
  fill: currentColor;
  d: path("M208 144h-68V98.32a44 44 0 1 0-24 0V144H48a20 20 0 0 0-20 20v44a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-44a20 20 0 0 0-20-20M108 56a20 20 0 1 1 20 20a20 20 0 0 1-20-20m96 148H52v-36h152Zm-32-100h32a12 12 0 0 1 0 24h-32a12 12 0 0 1 0-24");
}
</style><path class="ey2s9zbyp"/>`,
		"fallback": "ph:joystick-bold",
	});
}

export default Component;
