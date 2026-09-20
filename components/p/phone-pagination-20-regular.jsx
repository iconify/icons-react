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
		"content": `<style>.n6_9qfvkj {
  fill: currentColor;
  d: path("M8 15a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m1.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M7 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM6 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z");
}
</style><path class="n6_9qfvkj"/>`,
		"fallback": "fluent:phone-pagination-20-regular",
	});
}

export default Component;
