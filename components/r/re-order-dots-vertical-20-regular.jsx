import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ze9fttenn {
  fill: currentColor;
  d: path("M7 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m5-11a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2");
}
</style><path class="ze9fttenn"/>`,
		"fallback": "fluent:re-order-dots-vertical-20-regular",
	});
}

export default Component;
