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
		"content": `<style>.hh5n4cc5z {
  fill: currentColor;
  d: path("M232 192a8 8 0 0 1-8 8h-63.06a15.92 15.92 0 0 1-14.31-8.84L95.06 88H32a8 8 0 0 1 0-16h63.06a15.92 15.92 0 0 1 14.31 8.84L160.94 184H224a8 8 0 0 1 8 8M152 88h72a8 8 0 0 0 0-16h-72a8 8 0 0 0 0 16");
}
</style><path class="hh5n4cc5z"/>`,
		"fallback": "ph:option",
	});
}

export default Component;
