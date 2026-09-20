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
		"content": `<style>.gnp-zgb1x {
  fill: currentColor;
  d: path("M15 7a1 1 0 1 0 2 0a1 1 0 0 0-2 0M9 7a1 1 0 1 0 2 0a1 1 0 0 0-2 0M4 8a1 1 0 1 1 0-2a1 1 0 0 1 0 2m11 5a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-5 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-7-1a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="gnp-zgb1x"/>`,
		"fallback": "fluent:re-order-dots-horizontal-20-regular",
	});
}

export default Component;
