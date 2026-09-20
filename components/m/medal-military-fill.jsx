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
		"content": `<style>.zck2abb-l {
  fill: currentColor;
  d: path("M207 40H49a17 17 0 0 0-17 17v49.21a17 17 0 0 0 10 15.47l62.6 28.45a48 48 0 1 0 46.88 0L214 121.68a17 17 0 0 0 10-15.47V57a17 17 0 0 0-17-17M96 56h64v72.67l-32 14.54l-32-14.54Zm32 168a32 32 0 1 1 32-32a32 32 0 0 1-32 32");
}
</style><path class="zck2abb-l"/>`,
		"fallback": "ph:medal-military-fill",
	});
}

export default Component;
