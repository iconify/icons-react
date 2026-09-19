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
		"content": `<style>.l8gqgc8lr {
  fill: currentColor;
  d: path("m11.99 18.54l-7.37-5.73L3 14.07l9 7l9-7l-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7l-9 7l1.63 1.27zm0-11.47L17.74 9L12 13.47L6.26 9z");
}
</style><path class="l8gqgc8lr"/>`,
		"fallback": "ic:outline-layers",
	});
}

export default Component;
