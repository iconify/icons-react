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
		"content": `<style>.r-160s16z {
  fill: currentColor;
  d: path("M208 44H48a12 12 0 0 0-12 12v56c0 51.16 24.73 82.12 45.47 99.1c22.4 18.32 44.55 24.5 45.48 24.76a4 4 0 0 0 2.1 0c.93-.26 23.08-6.44 45.48-24.76c20.74-17 45.47-47.94 45.47-99.1V56a12 12 0 0 0-12-12m4 68c0 38.44-14.23 69.63-42.29 92.71A132.5 132.5 0 0 1 128 227.82a132.2 132.2 0 0 1-41.71-23.11C58.23 181.63 44 150.44 44 112V56a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z");
}
</style><path class="r-160s16z"/>`,
		"fallback": "ph:shield-thin",
	});
}

export default Component;
