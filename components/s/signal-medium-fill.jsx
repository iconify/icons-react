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
		"content": `<style>.y8yi0vlry {
  fill: currentColor;
  d: path("M13 20V8a1 1 0 0 1 2 0v12a1 1 0 0 1-2 0m-4 0v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0m-4 0v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0m13-1h.01a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2");
}
</style><path class="y8yi0vlry"/>`,
		"fallback": "coolicons:signal-medium-fill",
	});
}

export default Component;
