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
		"content": `<style>.adpa1xbpd {
  fill: currentColor;
  d: path("m228.65 129.11l-28.06-9.35a4 4 0 0 0-2.63 0l-43.23 15.72a8.1 8.1 0 0 1-2.73.52a8 8 0 0 1-7.71-5.88a8.17 8.17 0 0 1 5.22-9.73l18.49-6.72a2.54 2.54 0 0 0-.06-4.8a23.9 23.9 0 0 1-8.8-5.25a4 4 0 0 0-4.17-.91l-24.22 8.8a8 8 0 0 1-10.44-5.39a8.17 8.17 0 0 1 5.22-9.73L146 88.93a4 4 0 0 0 2.31-5.34l-3.06-7.16a4 4 0 0 0-5.05-2.19l-25.5 9.27a8 8 0 0 1-10.44-5.39a8.17 8.17 0 0 1 5.22-9.73l24-8.73a4 4 0 0 0 2.31-5.33l-5.4-12.73v-.1a16 16 0 0 0-20.14-8.5L34.53 60.49A16.05 16.05 0 0 0 24 75.53V192a16 16 0 0 0 16 16h200a16 16 0 0 0 16-16v-24.94a40 40 0 0 0-27.35-37.95M240 192H40v-16h200Z");
}
</style><path class="adpa1xbpd"/>`,
		"fallback": "ph:sneaker-fill",
	});
}

export default Component;
