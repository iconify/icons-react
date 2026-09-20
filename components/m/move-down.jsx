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
		"content": `<style>.w5h556bfb {
  fill: currentColor;
  d: path("m7 21l-1.4-1.4l1.575-1.65q-2.65-.3-4.413-2.287T1 11q0-2.925 2.038-4.962T8 4h3v2H8Q5.925 6 4.463 7.463T3 11q0 1.8 1.15 3.175T7.075 15.9L5.6 14.425L7 13l4 4zm6-1v-7h9v7zm0-9V4h9v7zm2-2h5V6h-5z");
}
</style><path class="w5h556bfb"/>`,
		"fallback": "material-symbols:move-down",
	});
}

export default Component;
