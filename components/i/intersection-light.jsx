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
		"content": `<style>.wnuhcllkz {
  fill: currentColor;
  d: path("M206 120v80a6 6 0 0 1-12 0v-80a66 66 0 0 0-132 0v80a6 6 0 0 1-12 0v-80a78 78 0 0 1 156 0");
}
</style><path class="wnuhcllkz"/>`,
		"fallback": "ph:intersection-light",
	});
}

export default Component;
