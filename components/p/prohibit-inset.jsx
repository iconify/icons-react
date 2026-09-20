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
		"content": `<style>.bqy86gtbo {
  fill: currentColor;
  d: path("M165.66 154.34a8 8 0 0 1-11.32 11.32l-64-64a8 8 0 0 1 11.32-11.32ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88");
}
</style><path class="bqy86gtbo"/>`,
		"fallback": "ph:prohibit-inset",
	});
}

export default Component;
