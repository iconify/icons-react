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
		"content": `<style>.m1gj11wiv {
  fill: currentColor;
  d: path("M8.126 5a4 4 0 0 1 7.748 0H17a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Zm2.141 0h3.466a2 2 0 0 0-3.466 0");
}
</style><path class="m1gj11wiv"/>`,
		"fallback": "coolicons:shopping-bag-fill",
	});
}

export default Component;
