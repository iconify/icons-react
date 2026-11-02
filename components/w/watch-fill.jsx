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
		"content": `<style>.f0l9d5bvd {
  fill: currentColor;
  d: path("M8 7.527V5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2.527a6 6 0 0 1 0 8.946V19a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-2.527a6 6 0 0 1 0-8.946m2-1.186a6.03 6.03 0 0 1 4 0V5a.997.997 0 0 0-1-1h-2a.997.997 0 0 0-1 1ZM13 10a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2h-1Zm-3 7.659V19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1.341a6.03 6.03 0 0 1-4 0");
}
</style><path class="f0l9d5bvd"/>`,
		"fallback": "coolicons:watch-fill",
	});
}

export default Component;
