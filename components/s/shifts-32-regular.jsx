import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.irgs4dbpc {
  fill: currentColor;
  d: path("M15.006 8a1 1 0 0 1 1 1v7h5a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1M9 4a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5zM6 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z");
}
</style><path class="irgs4dbpc"/>`,
		"fallback": "fluent:shifts-32-regular",
	});
}

export default Component;
