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
		"content": `<style>.p62mgvbyo {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m0-148a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 104a40 40 0 1 1 40-40a40 40 0 0 1-40 40");
}
</style><path class="p62mgvbyo"/>`,
		"fallback": "ph:record-bold",
	});
}

export default Component;
