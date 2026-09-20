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
		"content": `<style>.kji1qobrj {
  fill: currentColor;
  d: path("M5 19h14V9.614L14.387 5H5zm-1 1V4h10.789L20 9.211V20zm3.5-4h9v-1h-9zm0-3.5h9v-1h-9zm0-3.5h5.73V8H7.5zM5 19V5z");
}
</style><path class="kji1qobrj"/>`,
		"fallback": "material-symbols-light:text-snippet-outline-sharp",
	});
}

export default Component;
