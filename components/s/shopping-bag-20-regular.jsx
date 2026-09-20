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
		"content": `<style>.nc0c0twql {
  fill: currentColor;
  d: path("M10 2.5a2.5 2.5 0 0 0-4 2V6H5a1 1 0 0 0-1 1v8a3 3 0 0 0 3 3h6.5a2.5 2.5 0 0 0 2.5-2.5V7a1 1 0 0 0-1-1h-1V4.5a2.5 2.5 0 0 0-4-2m-3 2a1.5 1.5 0 1 1 3 0V6H7zm3.667-1.248A1.5 1.5 0 0 1 13 4.5V6h-2V4.5c0-.454-.121-.88-.333-1.248M7 17a2 2 0 0 1-2-2V7h6v8.5c0 .563.186 1.082.5 1.5zm8-1.5a1.5 1.5 0 0 1-3 0V7h3z");
}
</style><path class="nc0c0twql"/>`,
		"fallback": "fluent:shopping-bag-20-regular",
	});
}

export default Component;
