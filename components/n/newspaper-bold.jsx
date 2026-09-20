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
		"content": `<style>.sb9xryb5p {
  fill: currentColor;
  d: path("M92 108a12 12 0 0 1 12-12h72a12 12 0 0 1 0 24h-72a12 12 0 0 1-12-12m12 52h72a12 12 0 0 0 0-24h-72a12 12 0 0 0 0 24m132-96v120a28 28 0 0 1-28 28H36a32 32 0 0 1-32-32V88a12 12 0 0 1 24 0v92a8 8 0 0 0 16 0V64a20 20 0 0 1 20-20h152a20 20 0 0 1 20 20m-24 4H68v112a32 32 0 0 1-1 8h141a4 4 0 0 0 4-4Z");
}
</style><path class="sb9xryb5p"/>`,
		"fallback": "ph:newspaper-bold",
	});
}

export default Component;
