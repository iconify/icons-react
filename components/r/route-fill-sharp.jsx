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
		"content": `<style>.bzl9v9h9e {
  fill: currentColor;
  d: path("M15.171 7H7v4h11a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8.829a3 3 0 1 1 0-2H17v-4H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h9.171a3 3 0 1 1 0 2");
}
</style><path class="bzl9v9h9e"/>`,
		"fallback": "coolicons:route-fill-sharp",
	});
}

export default Component;
