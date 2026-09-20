import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.whk5j8b_o {
  fill: currentColor;
  d: path("M25.25 22a.75.75 0 0 1 0 1.5H7.75a.75.75 0 0 1 0-1.5zM8.5 7a6.5 6.5 0 1 1 0 13a6.5 6.5 0 0 1 0-13m0 2a.5.5 0 0 0-.5.5V13H4.5a.5.5 0 0 0 0 1H8v3.5a.5.5 0 0 0 1 0V14h3.5a.5.5 0 0 0 0-1H9V9.5a.5.5 0 0 0-.5-.5m16.75 6.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5zm0-6.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5zm0-6a.75.75 0 0 1 0 1.5H7.75a.75.75 0 0 1 0-1.5z");
}
</style><path class="whk5j8b_o"/>`,
		"fallback": "fluent:text-expand-28-regular",
	});
}

export default Component;
