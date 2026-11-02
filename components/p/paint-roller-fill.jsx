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
		"content": `<style>.yr7sd05rr {
  fill: currentColor;
  d: path("M5 2h10a3 3 0 0 1 3 3h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-5a.997.997 0 0 0-1 1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2a3 3 0 0 1 3-3h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3");
}
</style><path class="yr7sd05rr"/>`,
		"fallback": "coolicons:paint-roller-fill",
	});
}

export default Component;
