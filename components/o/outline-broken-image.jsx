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
		"content": `<style>.i23i5bbys {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5v-4.58l.99.99l4-4l4 4l4-3.99L19 12.43zm0-9.41l-1.01-1.01l-4 4.01l-4-4l-4 4l-.99-1V5h14z");
}
</style><path class="i23i5bbys"/>`,
		"fallback": "ic:outline-broken-image",
	});
}

export default Component;
