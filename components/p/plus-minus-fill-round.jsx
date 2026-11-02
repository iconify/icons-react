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
		"content": `<style>.xy1t6yb2g {
  fill: currentColor;
  d: path("M13 4v5h5a1 1 0 0 1 0 2h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5V4a1 1 0 0 1 2 0m5 15a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z");
}
</style><path class="xy1t6yb2g"/>`,
		"fallback": "coolicons:plus-minus-fill-round",
	});
}

export default Component;
