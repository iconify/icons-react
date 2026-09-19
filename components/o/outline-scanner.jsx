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
		"content": `<style>.m2ppizb7d {
  fill: currentColor;
  d: path("M19.8 10.7L4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8M19 18H5v-4h14zM6 15h2v2H6zm4 0h8v2h-8z");
}
</style><path class="m2ppizb7d"/>`,
		"fallback": "ic:outline-scanner",
	});
}

export default Component;
