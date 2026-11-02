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
		"content": `<style>.se90eo2ki {
  fill: currentColor;
  d: path("M4 2h16a1 1 0 0 1 1 1v7c-.001 5.712-3.495 9.647-8.594 11.914a1 1 0 0 1-.812 0C6.495 19.647 3.001 15.712 3 10V3a1 1 0 0 1 1-1m9 10V8a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0m-1 2a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="se90eo2ki"/>`,
		"fallback": "coolicons:shield-warning-fill-sharp",
	});
}

export default Component;
