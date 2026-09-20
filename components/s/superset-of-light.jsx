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
		"content": `<style>.zpu-hw3ix {
  fill: currentColor;
  d: path("M214 200a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h152a6 6 0 0 1 6 6m-62-46H56a6 6 0 0 0 0 12h96a62 62 0 0 0 0-124H56a6 6 0 0 0 0 12h96a50 50 0 0 1 0 100");
}
</style><path class="zpu-hw3ix"/>`,
		"fallback": "ph:superset-of-light",
	});
}

export default Component;
