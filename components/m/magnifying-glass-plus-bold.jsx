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
		"content": `<style>.vuevoknsp {
  fill: currentColor;
  d: path("M156 112a12 12 0 0 1-12 12h-20v20a12 12 0 0 1-24 0v-20H80a12 12 0 0 1 0-24h20V80a12 12 0 0 1 24 0v20h20a12 12 0 0 1 12 12m76.49 120.49a12 12 0 0 1-17 0L168 185a92.12 92.12 0 1 1 17-17l47.54 47.53a12 12 0 0 1-.05 16.96M112 180a68 68 0 1 0-68-68a68.08 68.08 0 0 0 68 68");
}
</style><path class="vuevoknsp"/>`,
		"fallback": "ph:magnifying-glass-plus-bold",
	});
}

export default Component;
