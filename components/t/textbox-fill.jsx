import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oi3mznbit {
  fill: currentColor;
  d: path("M248 80v96a16 16 0 0 1-16 16h-92a4 4 0 0 1-4-4V68a4 4 0 0 1 4-4h92a16 16 0 0 1 16 16M120 48v160a8 8 0 0 1-16 0v-16H24a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h80V48a8 8 0 0 1 16 0m-32 64a8 8 0 0 0-8-8H48a8 8 0 0 0 0 16h8v24a8 8 0 0 0 16 0v-24h8a8 8 0 0 0 8-8");
}
</style><path class="oi3mznbit"/>`,
		"fallback": "ph:textbox-fill",
	});
}

export default Component;
