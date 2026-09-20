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
		"content": `<style>.oz2masbet {
  fill: currentColor;
  d: path("M212 208a12 12 0 0 1-12 12h-72a92 92 0 0 1 0-184h72a12 12 0 0 1 0 24h-72a68 68 0 0 0 0 136h72a12 12 0 0 1 12 12");
}
</style><path class="oz2masbet"/>`,
		"fallback": "ph:subset-proper-of-bold",
	});
}

export default Component;
