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
		"content": `<style>.wlk80nbrs {
  fill: currentColor;
  d: path("M9 16h6.5a2.5 2.5 0 0 0 0-5h-.05c-.24-1.69-1.69-3-3.45-3c-1.4 0-2.6.83-3.16 2.02h-.16A2.994 2.994 0 0 0 6 13c0 1.66 1.34 3 3 3M23 3H1v18h22zm-2 16.01H3V4.99h18z");
}
</style><path class="wlk80nbrs"/>`,
		"fallback": "ic:sharp-settings-system-daydream",
	});
}

export default Component;
