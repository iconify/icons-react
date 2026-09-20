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
		"content": `<style>.eb6-d-r4l {
  fill: currentColor;
  d: path("M232 44a12 12 0 0 1-12 12H60a12 12 0 0 1 0-24h160a12 12 0 0 1 12 12m-56 44a12 12 0 0 0-12-12H44a12 12 0 0 0 0 24h120a12 12 0 0 0 12-12m0 44a12 12 0 0 0-12-12H76a12 12 0 0 0 0 24h88a12 12 0 0 0 12-12m-4 32h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m-32 44h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24");
}
</style><path class="eb6-d-r4l"/>`,
		"fallback": "ph:tornado-bold",
	});
}

export default Component;
