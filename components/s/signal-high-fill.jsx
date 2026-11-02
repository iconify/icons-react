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
		"content": `<style>.yugmclm0w {
  fill: currentColor;
  d: path("M19 4v16a1 1 0 0 1-2 0V4a1 1 0 0 1 2 0m-6 4a1 1 0 0 1 2 0v12a1 1 0 0 1-2 0Zm-4 4a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0Zm-4 4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0Z");
}
</style><path class="yugmclm0w"/>`,
		"fallback": "coolicons:signal-high-fill",
	});
}

export default Component;
