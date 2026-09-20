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
		"content": `<style>.j2raqq3sz {
  fill: currentColor;
  d: path("M212 208a12 12 0 0 1-12 12H48a12 12 0 0 1 0-24h152a12 12 0 0 1 12 12m-12-52h-96a44 44 0 0 1 0-88h96a12 12 0 0 0 0-24h-96a68 68 0 0 0 0 136h96a12 12 0 0 0 0-24");
}
</style><path class="j2raqq3sz"/>`,
		"fallback": "ph:subset-of-bold",
	});
}

export default Component;
