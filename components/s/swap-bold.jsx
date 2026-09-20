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
		"content": `<style>.po2dkjxct {
  fill: currentColor;
  d: path("M228 48v104a20 20 0 0 1-20 20h-95.08a12 12 0 0 1-17.41 16.49l-20-20a12 12 0 0 1 0-17l20-20A12 12 0 0 1 112.92 148H204V52H100a12 12 0 0 1-24 0v-4a20 20 0 0 1 20-20h112a20 20 0 0 1 20 20m-60 144a12 12 0 0 0-12 12H52v-96h91.08a12 12 0 0 0 17.41 16.49l20-20a12 12 0 0 0 0-17l-20-20A12 12 0 0 0 143.08 84H48a20 20 0 0 0-20 20v104a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20v-4a12 12 0 0 0-12-12");
}
</style><path class="po2dkjxct"/>`,
		"fallback": "ph:swap-bold",
	});
}

export default Component;
