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
		"content": `<style>.h368z8r3v {
  fill: currentColor;
  d: path("M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5Zm6 4a1 1 0 0 0 2 0a2 2 0 1 1 2 2a1 1 0 0 0 0 2a4 4 0 1 0-4-4m4 5a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="h368z8r3v"/>`,
		"fallback": "coolicons:square-help-fill-round",
	});
}

export default Component;
