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
		"content": `<style>.qjd5vkbcz {
  fill: currentColor;
  d: path("M3 10V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1m12 6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Z");
}
</style><path class="qjd5vkbcz"/>`,
		"fallback": "coolicons:row-minus-fill-sharp",
	});
}

export default Component;
