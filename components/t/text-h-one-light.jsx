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
		"content": `<style>.m5mutvb_a {
  fill: currentColor;
  d: path("M230 112v96a6 6 0 0 1-12 0v-84.79L203.33 133a6 6 0 0 1-6.66-10l24-16a6 6 0 0 1 9.33 5m-86-62a6 6 0 0 0-6 6v54H46V56a6 6 0 0 0-12 0v120a6 6 0 0 0 12 0v-54h92v54a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6");
}
</style><path class="m5mutvb_a"/>`,
		"fallback": "ph:text-h-one-light",
	});
}

export default Component;
