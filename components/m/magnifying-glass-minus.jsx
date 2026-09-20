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
		"content": `<style>.j0zmhjrsr {
  fill: currentColor;
  d: path("M152 112a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m77.66 117.66a8 8 0 0 1-11.32 0l-50.06-50.07a88.11 88.11 0 1 1 11.31-11.31l50.07 50.06a8 8 0 0 1 0 11.32M112 184a72 72 0 1 0-72-72a72.08 72.08 0 0 0 72 72");
}
</style><path class="j0zmhjrsr"/>`,
		"fallback": "ph:magnifying-glass-minus",
	});
}

export default Component;
