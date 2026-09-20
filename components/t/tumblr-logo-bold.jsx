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
		"content": `<style>.m35cp6bke {
  fill: currentColor;
  d: path("M192 124a12 12 0 0 0 12-12V72a12 12 0 0 0-12-12h-36V24a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12a36 36 0 0 1-36 36a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h20v52a68.07 68.07 0 0 0 68 68h40a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12h-32a4 4 0 0 1-4-4v-44Zm-32 72h20v24h-28a44.05 44.05 0 0 1-44-44v-64a12 12 0 0 0-12-12H76V82.79A60.18 60.18 0 0 0 122.79 36H132v36a12 12 0 0 0 12 12h36v16h-36a12 12 0 0 0-12 12v56a28 28 0 0 0 28 28");
}
</style><path class="m35cp6bke"/>`,
		"fallback": "ph:tumblr-logo-bold",
	});
}

export default Component;
