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
		"content": `<style>.p0vosibor {
  fill: currentColor;
  d: path("M5 8V5a3 3 0 1 1 6 0v3h2V5a3 3 0 1 1 6 0v3h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm4-3a1 1 0 0 0-2 0v3h2Zm8 0a1 1 0 0 0-2 0v3h2Zm1 8a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0Z");
}
</style><path class="p0vosibor"/>`,
		"fallback": "coolicons:toaster-fill-sharp",
	});
}

export default Component;
