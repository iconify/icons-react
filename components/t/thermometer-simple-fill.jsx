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
		"content": `<style>.pm14-tbgy {
  fill: currentColor;
  d: path("M160 146.08V40a32 32 0 0 0-64 0v106.08a56 56 0 1 0 64 0M128 24a16 16 0 0 1 16 16v64h-32V40a16 16 0 0 1 16-16");
}
</style><path class="pm14-tbgy"/>`,
		"fallback": "ph:thermometer-simple-fill",
	});
}

export default Component;
