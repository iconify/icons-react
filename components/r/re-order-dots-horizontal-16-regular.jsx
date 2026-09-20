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
		"content": `<style>.sz4jefb0k {
  fill: currentColor;
  d: path("M11 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2M7 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2M3 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="sz4jefb0k"/>`,
		"fallback": "fluent:re-order-dots-horizontal-16-regular",
	});
}

export default Component;
