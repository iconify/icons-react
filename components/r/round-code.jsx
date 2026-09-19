import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pj8lkc30v {
  fill: currentColor;
  d: path("M8.7 15.9L4.8 12l3.9-3.9a.984.984 0 0 0 0-1.4a.984.984 0 0 0-1.4 0l-4.59 4.59a.996.996 0 0 0 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0a.984.984 0 0 0 0-1.4m6.6 0l3.9-3.9l-3.9-3.9a.984.984 0 0 1 0-1.4a.984.984 0 0 1 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6a.984.984 0 0 1-1.4 0a.984.984 0 0 1 0-1.4");
}
</style><path class="pj8lkc30v"/>`,
		"fallback": "ic:round-code",
	});
}

export default Component;
