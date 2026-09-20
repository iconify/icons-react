import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u0770ugxa {
  fill: currentColor;
  d: path("M8.207 6.207a1 1 0 1 0-1.414-1.414l-2.5 2.5a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 1.414-1.414L7.414 9H11a1 1 0 1 0 0-2H7.414zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8");
}
</style><path class="u0770ugxa"/>`,
		"fallback": "fluent:presence-oof-16-regular",
	});
}

export default Component;
