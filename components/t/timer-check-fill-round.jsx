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
		"content": `<style>.oflp8ub9u {
  fill: currentColor;
  d: path("M14 2a1 1 0 0 1 0 2h-1v.054a9 9 0 0 1 4.618 1.913l1.675-1.674a.999.999 0 1 1 1.414 1.414l-1.674 1.675A9 9 0 1 1 11 4.054V4h-1a1 1 0 0 1 0-2ZM8.707 12.293a.999.999 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.475-.067l5-6a1 1 0 1 0-1.536-1.28l-4.299 5.159Z");
}
</style><path class="oflp8ub9u"/>`,
		"fallback": "coolicons:timer-check-fill-round",
	});
}

export default Component;
