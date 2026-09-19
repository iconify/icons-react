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
		"content": `<style>.ws7vmacpo {
  fill: currentColor;
  d: path("M21 5h-3v14h3zm-4 0H7v14h10zM6 5H3v14h3z");
}
</style><path class="ws7vmacpo"/>`,
		"fallback": "ic:sharp-view-array",
	});
}

export default Component;
