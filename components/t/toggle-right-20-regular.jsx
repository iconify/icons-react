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
		"content": `<style>.x9n1jpjgu {
  fill: currentColor;
  d: path("M14 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4M2 10a4 4 0 0 1 4-4h8a4 4 0 0 1 0 8H6a4 4 0 0 1-4-4m4-3a3 3 0 0 0 0 6h8a3 3 0 1 0 0-6z");
}
</style><path class="x9n1jpjgu"/>`,
		"fallback": "fluent:toggle-right-20-regular",
	});
}

export default Component;
