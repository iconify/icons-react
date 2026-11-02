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
		"content": `<style>.q4v-ekbdh {
  fill: currentColor;
  d: path("M8 16a4 4 0 0 0 8 0V4a1 1 0 0 1 2 0v12a6 6 0 1 1-12 0V4a1 1 0 0 1 2 0Z");
}
</style><path class="q4v-ekbdh"/>`,
		"fallback": "coolicons:letter-u-bulk",
	});
}

export default Component;
