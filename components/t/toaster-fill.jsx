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
		"content": `<style>.y39wpzvaw {
  fill: currentColor;
  d: path("M5 5a3 3 0 1 1 6 0v3h2V5a3 3 0 1 1 6 0v3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3Zm4 3V5a1 1 0 0 0-2 0v3Zm8-3a1 1 0 0 0-2 0v3h2Zm1 8a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0Z");
}
</style><path class="y39wpzvaw"/>`,
		"fallback": "coolicons:toaster-fill",
	});
}

export default Component;
