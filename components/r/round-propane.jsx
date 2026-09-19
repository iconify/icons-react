import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qjhkp46fz {
  fill: currentColor;
  d: path("M16.75 6H16V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1h-.75C3.97 6 1.1 8.53 1 11.82A6 6 0 0 0 7 18v2c0 .55.45 1 1 1s1-.45 1-1v-2h6v2c0 .55.45 1 1 1s1-.45 1-1v-2c3.38 0 6.1-2.79 6-6.18C22.9 8.53 20.03 6 16.75 6M10 5h4v1h-4z");
}
</style><path class="qjhkp46fz"/>`,
		"fallback": "ic:round-propane",
	});
}

export default Component;
