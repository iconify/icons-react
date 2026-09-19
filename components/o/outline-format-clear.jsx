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
		"content": `<style>.m1akydbpi {
  fill: currentColor;
  d: path("M20 8V5H6.39l3 3h1.83l-.55 1.28l2.09 2.1L14.21 8zM3.41 4.86L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21l1.41-1.41z");
}
</style><path class="m1akydbpi"/>`,
		"fallback": "ic:outline-format-clear",
	});
}

export default Component;
