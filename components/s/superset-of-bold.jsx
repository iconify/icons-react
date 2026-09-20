import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vlkkaoofi {
  fill: currentColor;
  d: path("M220 200a12 12 0 0 1-12 12H56a12 12 0 0 1 0-24h152a12 12 0 0 1 12 12m-68-52H56a12 12 0 0 0 0 24h96a68 68 0 0 0 0-136H56a12 12 0 0 0 0 24h96a44 44 0 0 1 0 88");
}
</style><path class="vlkkaoofi"/>`,
		"fallback": "ph:superset-of-bold",
	});
}

export default Component;
