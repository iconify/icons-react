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
		"content": `<style>.m8v0w0ltt {
  fill: currentColor;
  d: path("m14 107.47l112 64a4 4 0 0 0 4 0l112-64a4 4 0 0 0 0-6.94l-112-64a4 4 0 0 0-4 0l-112 64a4 4 0 0 0 0 6.94m114-62.86L231.94 104L128 163.39L24.06 104ZM243.47 142a4 4 0 0 1-1.49 5.45l-112 64a4 4 0 0 1-4 0l-112-64a4 4 0 0 1 4-6.94l110 62.86l110-62.86a4 4 0 0 1 5.49 1.49");
}
</style><path class="m8v0w0ltt"/>`,
		"fallback": "ph:stack-simple-thin",
	});
}

export default Component;
