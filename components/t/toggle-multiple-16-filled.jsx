import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zg7micc9s {
  fill: currentColor;
  d: path("M5 1a3 3 0 0 0 0 6h6a3 3 0 1 0 0-6zm1 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0M5 8a3 3 0 0 0 0 6h6a3 3 0 1 0 0-6zm6 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2");
}
</style><path class="zg7micc9s"/>`,
		"fallback": "fluent:toggle-multiple-16-filled",
	});
}

export default Component;
