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
		"content": `<style>.kwe0lzuur {
  fill: currentColor;
  d: path("M228 232a12 12 0 0 1-12 12H112a12 12 0 0 1 0-24h104a12 12 0 0 1 12 12m0-72v28a20 20 0 0 1-20 20h-95.9a19.9 19.9 0 0 1-17.89-11.06L38.1 85a20.12 20.12 0 0 1 0-17.9L60.22 23a20 20 0 0 1 26.72-9l29.81 14.27l.18.09a20 20 0 0 1 8.95 26.83l-.17.33l-13.21 24.56L142.25 140H208a20 20 0 0 1 20 20m-24 4h-64.23a19.9 19.9 0 0 1-17.89-11.06l-31.79-64a20.07 20.07 0 0 1 0-17.86c.06-.11.12-.22.17-.33l12.2-22.62L79.91 37.3L60.47 76l54.1 108H204Z");
}
</style><path class="kwe0lzuur"/>`,
		"fallback": "ph:seat-bold",
	});
}

export default Component;
