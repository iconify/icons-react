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
		"content": `<style>.vyd2vxqxl {
  fill: currentColor;
  d: path("M17 2.5a.5.5 0 0 0-1 0v27a.5.5 0 0 0 1 0zM18.5 8H26a2 2 0 1 1 0 4h-7.5v1H26a3 3 0 1 0 0-6h-7.5zM26 19h-7.5v-1H26a3 3 0 1 1 0 6h-7.5v-1H26a2 2 0 1 0 0-4M3.5 5a.5.5 0 0 0 0 1h11V5zM3 25.5a.5.5 0 0 1 .5-.5h11v1h-11a.5.5 0 0 1-.5-.5m.5-5.5a.5.5 0 0 0 0 1h11v-1zM3 15.5a.5.5 0 0 1 .5-.5h11v1h-11a.5.5 0 0 1-.5-.5m.5-5.5a.5.5 0 0 0 0 1h11v-1z");
}
</style><path class="vyd2vxqxl"/>`,
		"fallback": "fluent:text-density-32-light",
	});
}

export default Component;
