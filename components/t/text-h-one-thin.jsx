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
		"content": `<style>.rf8k6bz_m {
  fill: currentColor;
  d: path("M228 112v96a4 4 0 0 1-8 0v-88.53l-17.78 11.86a4 4 0 1 1-4.44-6.66l24-16A4 4 0 0 1 228 112m-84-60a4 4 0 0 0-4 4v56H44V56a4 4 0 0 0-8 0v120a4 4 0 0 0 8 0v-56h96v56a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4");
}
</style><path class="rf8k6bz_m"/>`,
		"fallback": "ph:text-h-one-thin",
	});
}

export default Component;
