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
		"content": `<style>.e8trd0b6b {
  fill: currentColor;
  d: path("m228.24 108.24l-48 48a6 6 0 0 1-8.48-8.48L209.51 110H165a89.94 89.94 0 0 0-87.17 67.5a6 6 0 0 1-11.62-3A101.94 101.94 0 0 1 165 98h44.53l-37.77-37.76a6 6 0 0 1 8.48-8.48l48 48a6 6 0 0 1 0 8.48M192 210H38V88a6 6 0 0 0-12 0v128a6 6 0 0 0 6 6h160a6 6 0 0 0 0-12");
}
</style><path class="e8trd0b6b"/>`,
		"fallback": "ph:share-light",
	});
}

export default Component;
