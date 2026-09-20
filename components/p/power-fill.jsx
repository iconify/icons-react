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
		"content": `<style>.vzch47bkz {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104 104 0 0 0 128 24m-8 40a8 8 0 0 1 16 0v64a8 8 0 0 1-16 0Zm8 144A80 80 0 0 1 83.55 61.48a8 8 0 1 1 8.9 13.29a64 64 0 1 0 71.1 0a8 8 0 1 1 8.9-13.29A80 80 0 0 1 128 208");
}
</style><path class="vzch47bkz"/>`,
		"fallback": "ph:power-fill",
	});
}

export default Component;
