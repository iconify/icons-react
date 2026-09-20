import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zy3rl5cqd {
  fill: currentColor;
  d: path("M22.001 4a1 1 0 0 1 0 2h-3.81l-6.244 16.5h4.054a1 1 0 0 1 0 2H6.004a1 1 0 1 1 0-2h3.805L16.053 6h-4.05a1 1 0 1 1 0-2z");
}
</style><path class="zy3rl5cqd"/>`,
		"fallback": "fluent:text-italic-28-filled",
	});
}

export default Component;
