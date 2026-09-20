import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.l4rvibcso {
  fill: currentColor;
  d: path("M7 3.75a.75.75 0 0 0-1.5 0V9.5a4.5 4.5 0 1 0 9 0V3.75a.75.75 0 0 0-1.5 0V9.5a3 3 0 1 1-6 0zM5.75 15.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="l4rvibcso"/>`,
		"fallback": "fluent:text-underline-character-u-20-filled",
	});
}

export default Component;
