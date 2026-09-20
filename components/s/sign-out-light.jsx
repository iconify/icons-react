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
		"content": `<style>.rc5f8ybma {
  fill: currentColor;
  d: path("M118 216a6 6 0 0 1-6 6H48a6 6 0 0 1-6-6V40a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H54v164h58a6 6 0 0 1 6 6m110.24-92.24l-40-40a6 6 0 0 0-8.48 8.48L209.51 122H112a6 6 0 0 0 0 12h97.51l-29.75 29.76a6 6 0 1 0 8.48 8.48l40-40a6 6 0 0 0 0-8.48");
}
</style><path class="rc5f8ybma"/>`,
		"fallback": "ph:sign-out-light",
	});
}

export default Component;
