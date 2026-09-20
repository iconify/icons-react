import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fnxy45bka {
  fill: currentColor;
  d: path("M2.75 5a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5zm7 13a.75.75 0 0 0 0 1.5h11.5a.75.75 0 0 0 0-1.5zM9 12.25a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 0 1.5H9.75a.75.75 0 0 1-.75-.75m-5.22.72a.75.75 0 0 0-1.06 1.06l1.47 1.47l-1.47 1.47a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06z");
}
</style><path class="fnxy45bka"/>`,
		"fallback": "fluent:text-hanging-24-regular",
	});
}

export default Component;
