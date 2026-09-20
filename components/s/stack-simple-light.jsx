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
		"content": `<style>.v-j5-ybef {
  fill: currentColor;
  d: path("m13 109.21l112 64a6 6 0 0 0 6 0l112-64a6 6 0 0 0 0-10.42l-112-64a6 6 0 0 0-6 0l-112 64a6 6 0 0 0 0 10.42m115-62.3L227.91 104L128 161.09L28.09 104ZM245.21 141a6 6 0 0 1-2.23 8.19l-112 64a6 6 0 0 1-6 0l-112-64a6 6 0 0 1 6-10.42l109 62.3l109-62.3a6 6 0 0 1 8.23 2.23");
}
</style><path class="v-j5-ybef"/>`,
		"fallback": "ph:stack-simple-light",
	});
}

export default Component;
