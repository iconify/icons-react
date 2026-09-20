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
		"content": `<style>.ww8b0fbjy {
  fill: currentColor;
  d: path("M22 128a42 42 0 0 0 42 42h40a6 6 0 0 1 0 12H64a54 54 0 0 1 0-108h40a6 6 0 0 1 0 12H64a42 42 0 0 0-42 42m170-54h-40a6 6 0 0 0 0 12h40a42 42 0 0 1 0 84h-40a6 6 0 0 0 0 12h40a54 54 0 0 0 0-108");
}
</style><path class="ww8b0fbjy"/>`,
		"fallback": "ph:link-simple-horizontal-break-light",
	});
}

export default Component;
