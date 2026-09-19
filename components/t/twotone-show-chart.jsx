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
		"content": `<style>.tyqkkwbwy {
  fill: currentColor;
  d: path("m13.5 13.48l-4-4L2 16.99l1.5 1.5l6-6.01l4 4L22 6.92l-1.41-1.41z");
}
</style><path class="tyqkkwbwy"/>`,
		"fallback": "ic:twotone-show-chart",
	});
}

export default Component;
