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
		"content": `<style>.ybknrabyh {
  fill: currentColor;
  d: path("M10 5h4a5 5 0 0 1 5 5v4a5 5 0 0 1-1.464 3.536A5 5 0 0 1 14 19h-4a5 5 0 0 1-5-5v-4a5 5 0 0 1 5-5");
}
</style><path class="ybknrabyh"/>`,
		"fallback": "coolicons:square-medium-fill-round",
	});
}

export default Component;
