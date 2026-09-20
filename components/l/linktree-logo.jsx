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
		"content": `<style>.n70h340tp {
  fill: currentColor;
  d: path("M136 160v72a8 8 0 0 1-16 0v-72a8 8 0 0 1 16 0m72-64h-60.69l42.35-42.34a8 8 0 0 0-11.32-11.32L136 84.69V24a8 8 0 0 0-16 0v60.69L77.66 42.34a8 8 0 0 0-11.32 11.32L108.69 96H48a8 8 0 0 0 0 16h60.69l-42.35 42.34a8 8 0 0 0 11.32 11.32L128 115.31l50.34 50.35a8 8 0 0 0 11.32-11.32L147.31 112H208a8 8 0 0 0 0-16");
}
</style><path class="n70h340tp"/>`,
		"fallback": "ph:linktree-logo",
	});
}

export default Component;
