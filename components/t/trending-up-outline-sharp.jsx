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
		"content": `<style>.qd077oh-y {
  fill: currentColor;
  d: path("M3.4 18L2 16.6l7.4-7.45l4 4L18.6 8H16V6h6v6h-2V9.4L13.4 16l-4-4z");
}
</style><path class="qd077oh-y"/>`,
		"fallback": "material-symbols:trending-up-outline-sharp",
	});
}

export default Component;
