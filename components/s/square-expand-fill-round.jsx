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
		"content": `<style>.n5d6elb8k {
  fill: currentColor;
  d: path("M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5Zm11-1a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1Zm-2 12a1 1 0 0 0 0-2H8v-3a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1Z");
}
</style><path class="n5d6elb8k"/>`,
		"fallback": "coolicons:square-expand-fill-round",
	});
}

export default Component;
