import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o6z_y36-r {
  fill: currentColor;
  d: path("M43.631 6.137a1.25 1.25 0 1 0-1.767-1.768l-2.498 2.497a1.25 1.25 0 0 0 1.768 1.768zm-7.997 6.23a1.25 1.25 0 0 1 0 1.767l-3.5 3.5a1.25 1.25 0 0 1-1.768-1.768l3.5-3.5a1.25 1.25 0 0 1 1.768 0m-9 10.767a1.25 1.25 0 0 0-1.768-1.768l-3.5 3.5a1.25 1.25 0 0 0 1.768 1.768zm-9 7.232a1.25 1.25 0 0 1 0 1.768l-3.5 3.5a1.25 1.25 0 0 1-1.768-1.768l3.5-3.5a1.25 1.25 0 0 1 1.768 0m-9 9a1.25 1.25 0 0 1 0 1.768L6.137 43.63a1.25 1.25 0 0 1-1.768-1.767l2.497-2.498a1.25 1.25 0 0 1 1.768 0");
}
</style><path class="o6z_y36-r"/>`,
		"fallback": "fluent:line-dashes-48-regular",
	});
}

export default Component;
