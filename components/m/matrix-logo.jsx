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
		"content": `<style>.mu_y4hbkx {
  fill: currentColor;
  d: path("M72 216a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16H48v160h16a8 8 0 0 1 8 8M216 32h-24a8 8 0 0 0 0 16h16v160h-16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-32 88a32 32 0 0 0-56-21.13a31.93 31.93 0 0 0-40.71-6.15A8 8 0 0 0 72 96v64a8 8 0 0 0 16 0v-40a16 16 0 0 1 32 0v40a8 8 0 0 0 16 0v-40a16 16 0 0 1 32 0v40a8 8 0 0 0 16 0Z");
}
</style><path class="mu_y4hbkx"/>`,
		"fallback": "ph:matrix-logo",
	});
}

export default Component;
