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
		"content": `<style>.bc_ljou1u {
  fill: currentColor;
  d: path("M7 9v6a5 5 0 0 0 10 0v-1h-3a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v2a7 7 0 1 1-14 0V9a7 7 0 1 1 14 0a1 1 0 0 1-2 0A5 5 0 1 0 7 9");
}
</style><path class="bc_ljou1u"/>`,
		"fallback": "coolicons:letter-g-bulk",
	});
}

export default Component;
