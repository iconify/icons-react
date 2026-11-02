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
		"content": `<style>.b46jhob4i {
  fill: currentColor;
  d: path("M7 3h10a5 5 0 0 1 5 5v8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 21H7a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5m6 14h2a3 3 0 1 0 0-6h-2a3 3 0 1 0 0 6");
}
</style><path class="b46jhob4i"/>`,
		"fallback": "coolicons:picture-in-picture-fill-round",
	});
}

export default Component;
