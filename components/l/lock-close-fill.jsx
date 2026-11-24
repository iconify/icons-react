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
		"content": `<style>.p9gsre8hn {
  fill: currentColor;
  d: path("M7 8V7a5 5 0 0 1 10 0v1h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3Zm8-1a3 3 0 1 0-6 0v1h6Zm-3 6.586l-1.293-1.293a.999.999 0 1 0-1.414 1.414L10.586 15l-1.293 1.293a.999.999 0 1 0 1.414 1.414L12 16.414l1.293 1.293a.999.999 0 1 0 1.414-1.414L13.414 15l1.293-1.293a.999.999 0 1 0-1.414-1.414Z");
}
</style><path class="p9gsre8hn"/>`,
		"fallback": "coolicons:lock-close-fill",
	});
}

export default Component;
