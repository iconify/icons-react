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
		"content": `<style>.un6gk1f4w {
  fill: currentColor;
  d: path("M92 224a20 20 0 1 1-20-20a20 20 0 0 1 20 20m124-20a20 20 0 1 0 20 20a20 20 0 0 0-20-20m24-36H60V75.31a19.86 19.86 0 0 0-5.86-14.14L32.49 39.51a12 12 0 0 0-17 17L36 77v91h-4a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24");
}
</style><path class="un6gk1f4w"/>`,
		"fallback": "ph:trolley-bold",
	});
}

export default Component;
