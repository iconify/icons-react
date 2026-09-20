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
		"content": `<style>.yrtjkw1cf {
  fill: currentColor;
  d: path("M222 128a86.1 86.1 0 0 1-86 86H64a6 6 0 0 1 0-12h72a74 74 0 0 0 0-148H64a6 6 0 0 1 0-12h72a86.1 86.1 0 0 1 86 86");
}
</style><path class="yrtjkw1cf"/>`,
		"fallback": "ph:superset-proper-of-light",
	});
}

export default Component;
