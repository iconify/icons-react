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
		"content": `<style>.h_aqshbbh {
  fill: currentColor;
  d: path("M222 192a6 6 0 0 1-12 0c0-80.5-65.5-146-146-146a6 6 0 0 1 0-12c87.12 0 158 70.88 158 158M64 106a6 6 0 0 0 0 12a74.09 74.09 0 0 1 74 74a6 6 0 0 0 12 0a86.1 86.1 0 0 0-86-86m4 72a10 10 0 1 0 10 10a10 10 0 0 0-10-10");
}
</style><path class="h_aqshbbh"/>`,
		"fallback": "ph:rss-simple-light",
	});
}

export default Component;
